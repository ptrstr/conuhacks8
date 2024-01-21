from fastapi import Depends, FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.db import User, create_db_and_tables
from app.schemas import UserCreate, UserRead, UserUpdate, Feed, Card
from app.users import auth_backend, current_active_user, fastapi_users
import app.chat as chat

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


@app.get("/authenticated-route")
async def authenticated_route(user: User = Depends(current_active_user)):
    return {"message": f"Hello {user.email}!"}

@app.get("/feeds/buddies")
#async def feeds(user: User = Depends(current_active_user)):
async def feed_buddies() -> Feed:
    return Feed(feed=[Card(title='bob', url='https://google.com', image='https://imgv3.fotor.com/images/share/Fotor-free-online-photo-editor.png')])

@app.get("/feeds/discovery")
#async def feeds(user: User = Depends(current_active_user)):
async def feed_discovery() -> Feed:
    return Feed(feed=[Card(title='bob', url='https://google.com', image='https://imgv3.fotor.com/images/share/Fotor-free-online-photo-editor.png')])

@app.on_event("startup")
async def on_startup():
    # Not needed if you setup a migration system like Alembic
    await create_db_and_tables()