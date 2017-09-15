import redis = require('redis');
import { config } from '../config';

const clientOpts: redis.ClientOpts = {
    host: config.REDIS.HOST,
    port: config.REDIS.PORT
}

const client: redis.RedisClient = redis.createClient(clientOpts)

client.on("error", (err) => {
    console.log(err.message, `Redis connection error: ${new Date()}`)
    process.exit(1)
})

export { client }
