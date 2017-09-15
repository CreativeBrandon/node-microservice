import { NextFunction, Request, Response, Express } from 'express';
import { config } from '../config';
import { client } from '../utils/redis';

const validateKey = (key: any, next: NextFunction) => {
    /** Name cannot have wildcards in them */
    if (/\*/.test(key)) {
        return next(new Error('Name can not have wildcards'))
    }
}

const send = (body: any): any => { }

export const cache = (req: Request, res: Response, next: NextFunction) => {

    // define cache key id/name req.query.org
    const key = req.originalUrl;
    const value = req.body;

    validateKey(key, next)

    // Get key from Redis
    client.get(key, (err: any, data: any) => {

        if (err) res.json({
            'cache_error': err
        })

        console.log(data.length + " replies:")

        if (data != null && data.length !== 0) return res.json({
            'message': 'cache exists'
        })

        // store key
        client.set(key, value, 'EX', 120)
    })

    return next()
}
