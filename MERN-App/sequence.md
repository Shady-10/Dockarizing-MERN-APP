1) Run baseline application
```
yarn start
yarn start
brew services start mongodb-community@4.4
```

2) Move Mongo to container

`docker run -p 27017:27017 mongo:4.4-bionic`

3) Dockerize react client [Dockerfile](./client/Dockerfile.dev)
4) Dockerize api server [Dockerfile](./server/Dockerfile)
5) Set up docker compose [docker-compose.yml](./docker-compose-dev.yml)
6) Enable hot reloading by mounting in src
