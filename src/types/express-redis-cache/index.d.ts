
declare module  "express-redis-cache" {
    import cache = require('express-redis-cache');
    import redis = require('redis');

    export interface ExpressRedisCache {
        new(client: redis.RedisClient):void
    }
}
