# Conuhacks

## Running it all
To run everything:
```
docker-compose build
docker-compose up
```

## Developing
### API
Only the first time or to install packages:
```
pip install -r requirements.txt
```

To start the server
```
uvicorn main:app --port 8000
```

### Web
Only the first time or to install packages:
```
npm install
```

To start the server
```
npm run dev
```