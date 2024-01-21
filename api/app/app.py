from fastapi import Depends, FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.db import User, create_db_and_tables, async_session_maker
from app.schemas import UserCreate, UserRead, UserUpdate, Feed, Card
from app.users import auth_backend, current_active_user, fastapi_users
import app.chat as chat
import random
from typing import List
import uuid
from sqlalchemy import select

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=['*'],
    allow_credentials=True,
    allow_methods=['*'],
    allow_headers=['*'],
)

app.include_router(
    fastapi_users.get_auth_router(auth_backend), prefix="/auth/jwt", tags=["auth"]
)
app.include_router(
    fastapi_users.get_register_router(UserRead, UserCreate),
    prefix="/auth",
    tags=["auth"],
)
app.include_router(
    fastapi_users.get_reset_password_router(),
    prefix="/auth",
    tags=["auth"],
)
app.include_router(
    fastapi_users.get_verify_router(UserRead),
    prefix="/auth",
    tags=["auth"],
)
app.include_router(
    fastapi_users.get_users_router(UserRead, UserUpdate),
    prefix="/users",
    tags=["users"],
)
app.include_router(
    chat.router,
    prefix='/chat'
)


@app.get("/whoami")
async def whoami(user: User = Depends(current_active_user)) -> str:
    return str(user.id)

@app.get('/user/{user_id}')
async def get_user(user_id: str, user: User = Depends(current_active_user)) -> UserRead:
    async with async_session_maker() as session:
        async with session.begin():
            result = await session.execute(select(User).filter(User.id == uuid.UUID(user_id)))
            return list(result.scalars())[0]

@app.get("/feeds/buddies")
async def feed_buddies(user: User = Depends(current_active_user)) -> List[str]:
    return ['lol']

@app.get("/feeds/discovery")
async def feed_discovery(user: User = Depends(current_active_user)) -> List[str]:
    async with async_session_maker() as session:
        async with session.begin():
            result = await session.execute(select(User))
            db_users = list(result.scalars())
    

    random.shuffle(db_users)

    db_users = db_users[:5]
    
    return [str(x.id) for x in db_users]

@app.on_event("startup")
async def on_startup():
    # Not needed if you setup a migration system like Alembic
    await create_db_and_tables()