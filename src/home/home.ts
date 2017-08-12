import { Request, Response, Express } from 'express';
import { config } from '../config';

export const index = (req: Request, res: Response) => {
    res.json({
        env: config.ENV,
        message: 'Welcome to node microservice',
        port: config.PORT
    })
}

export const routes = (app: Express) => {
    app.get('/', this.index)
}
