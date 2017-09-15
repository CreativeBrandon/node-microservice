# Node Microservice

1. Set env variables & database name in [Config file](src/config/index.ts)
2. `npm install`

## Run app
* `docker-compose up`
* `docker-compose down`

# Windows Issues
Issues connecting to mongodb - Windows ENV. 
1. can connect when machine ip is used for mongo_connection .env
2. use ports in docker compose -- do not use "expose"
