import uuid
from typing import AsyncGenerator

from fastapi import Depends
from fastapi_users.db import SQLAlchemyBaseUserTableUUID, SQLAlchemyUserDatabase
from sqlalchemy.ext.asyncio import AsyncSession, async_sessionmaker, create_async_engine
from sqlalchemy.orm import DeclarativeBase
from sqlalchemy import create_engine, Column, Integer, String, ForeignKey
import app.schemas as schemas

DATABASE_URL = "sqlite+aiosqlite:///./local.db"


class Base(DeclarativeBase):
    pass


class User(SQLAlchemyBaseUserTableUUID, Base):
    full_name = Column(String)
    avatar = Column(Integer)


class Message(Base):
    __tablename__ = 'messages'

    id = Column(Integer, primary_key=True)
    user_from = Column(String)
    user_to = Column(String)
    content = Column(String)
    time = Column(Integer)

    def to_schema(self):
        return schemas.Message(author=self.user_from, content=self.content, time=self.time)

class Interest(Base):
    __tablename__ = 'interests'

    id = Column(Integer, primary_key=True)
    uuid = Column(String)
    name = Column(String)
    description = Column(String)
    image = Column(String)

engine = create_async_engine(DATABASE_URL)
async_session_maker = async_sessionmaker(engine, expire_on_commit=False)


async def create_db_and_tables():
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)

async def get_async_session() -> AsyncGenerator[AsyncSession, None]:
    async with async_session_maker() as session:
        yield session

async def get_user_db(session: AsyncSession = Depends(get_async_session)):
    yield SQLAlchemyUserDatabase(session, User)