import uuid
from typing import List
from pydantic import BaseModel
from fastapi_users import schemas

class UserRead(schemas.BaseUser[uuid.UUID]):
    pass

class UserCreate(schemas.BaseUserCreate):
    full_name: str
    pass

class UserUpdate(schemas.BaseUserUpdate):
    pass

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