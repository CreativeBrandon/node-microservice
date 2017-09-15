import { Express } from 'express';
import { cache } from './middleware/cache';
import { home } from './features/home/home';

export const init = (app: Express) => {
    app.get('/', cache, home)
}
