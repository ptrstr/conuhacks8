import uuid
from fastapi import APIRouter, Depends, WebSocket, WebSocketDisconnect
import app.schemas as schemas
from app.users import current_active_user
from app.db import async_session_maker, Message, User
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession
from typing import List
import time
from dataclasses import dataclass

router = APIRouter()

@dataclass
class ChatSession:
    id_from: str
    id_to: str = ''
    socket: WebSocket = None

chat_sessions = {}

@router.get('/messages/{other_id}', tags=['chat'])
async def read_messages(other_id: str, user: User = Depends(current_active_user)) -> List[schemas.Message]:
    messages = []

    async with async_session_maker() as session:
        async with session.begin():
            q = (
                select(Message)
                    .filter((Message.user_from == str(user.id) or other_id == Message.user_to) or (Message.user_from == other_id or str(user.id) == Message.user_to))
            )

            result = await session.execute(q)
            db_messages = result.scalars()

    for db_message in db_messages:
        messages.append(db_message.to_schema())

    return messages

@router.post('/messages/{other_id}', tags=['chat'])
async def send_message(other_id: str, content: str, user: User = Depends(current_active_user)):
    message = Message(
        user_from=str(user.id),
        user_to=other_id,
        content=content,
        time=time.time_ns() // 1_000_000
    )

    async with async_session_maker() as session:
        async with session.begin():
            session.add(message)
            
        await session.commit()

    comp_ids = set([str(user.id), other_id])
    for sess in chat_sessions.values():
        sess_ids = set([sess.id_from, sess.id_to])

        if comp_ids == sess_ids:
            await sess.socket.send_text(message.to_schema().model_dump_json())

    return {'status':'success'}

@router.get('/ws/setup', tags=['chat'])
async def ws_setup(user: User = Depends(current_active_user)) -> schemas.WebSocketKey:
    key = schemas.WebSocketKey(key=str(uuid.uuid4()))
    chat_sessions.update({key.key: ChatSession(id_from=str(user.id))})
    return key

@router.websocket('/ws/{key}/{other_id}')
async def websocket_endpoint(websocket: WebSocket, key: str, other_id: str):
    if key not in chat_sessions.keys():
        await websocket.close()
        return
    
    sess = chat_sessions[key]
    sess.id_to = other_id
    sess.socket = websocket

    await websocket.accept()

    try:
        while True:
            data = await websocket.receive_text()

            # for user, user_ws in connected_users.items():
            #     if user != user_id:
            #         await user_ws.send_text(data)
    except:
        del chat_sessions[key]
        await websocket.close()
