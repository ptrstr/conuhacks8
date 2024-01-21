import uuid
from typing import List, Optional
from pydantic import BaseModel
from fastapi_users import schemas

class UserRead(schemas.BaseUser[uuid.UUID]):
    full_name: str
    avatar: int
    skills: Optional[str] = ''
    interests: Optional[str] = ''

class UserCreate(schemas.BaseUserCreate):
    full_name: str
    avatar: int
    skills: str = ''
    interests: str = ''

class UserUpdate(schemas.BaseUserUpdate):
    full_name: Optional[str] = None
    avatar: Optional[int] = None
    skills: Optional[str] = None
    interests: Optional[str] = None

class WebSocketKey(BaseModel):
    key: str

class Card(BaseModel):
    title: str
    url: str
    image: str

class Feed(BaseModel):
    feed: List[Card]

class Message(BaseModel):
    author: str
    content: str
    time: int

class Skill(BaseModel):
    name: str
    description: str
    image: str