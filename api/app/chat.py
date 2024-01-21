import uuid
from fastapi import APIRouter, Depends, WebSocket, WebSocketDisconnect
from app.schemas import WebSocketKey
from app.users import current_active_user
from app.db import get_async_session, Message, User
import time

router = APIRouter()

@router.get('/messages/{other_id}', tags=['chat'])
async def read_messages(other_id: str, user: User = Depends(current_active_user)):
    messages = await get_async_session().query(Message).filter(Message.user_from == User.uid).filter(other_id == Message.user_to).all()
    return messages

connected_users = {}

@router.post('/messages/{other_id}', tags=['chat'])
async def send_message(other_id: str, content: str, user: User = Depends(current_active_user)):
    message = Message(
        user_from=user,
        user_to=other_id,
        content=content,
        time=int(time.time())
    )

    async with get_async_session() as session:
        session.add(message)
        session.close()
    
    if user.id in connected_users.keys():
        connected_users[user.id].send_text(content)
    
    if other_id in connected_users.keys():
        connected_users[other_id].send_text(content)

    return {'status':'success'}


sessions = {}

@router.get('/ws/setup/{other_id}', tags=['chat'])
async def ws_setup(other_id: str, user: User = Depends(current_active_user)) -> WebSocketKey:
    key = WebSocketKey(str(uuid.uuid4()))
    sessions.update({key.key: other_id})
    return key

@router.websocket('/ws/{key}')
async def websocket_endpoint(websocket: WebSocket, key: str):
    if key not in sessions.keys():
        await websocket.close()
        return

    user_id = sessions[key]

    await websocket.accept()

    connected_users[user_id] = websocket

    try:
        while True:
            data = await websocket.receive_text()

            # for user, user_ws in connected_users.items():
            #     if user != user_id:
            #         await user_ws.send_text(data)
    except:
        del connected_users[user_id]
        del sessions[key]
        await websocket.close()
