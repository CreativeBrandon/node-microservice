import * as dotenv from "dotenv";

dotenv.config({ path: ".env" })

export interface AppConfig {
    ENV: string;
    MONGO: {
        CONNECTION: string,
        DB_NAME: string
    }
    PORT: number;
    REDIS: {
        PORT: number;
        HOST: any;
    }
}

export const config: AppConfig = {
    ENV: process.env.ENV || 'development',
    MONGO: {
        CONNECTION: process.env.MONGO_CONNECTION,
        DB_NAME: 'test'
    },
    PORT: process.env.PORT || 3000,
    REDIS: {
        HOST: process.env.REDIS_HOST,
        PORT: process.env.REDIS_PORT
    }
}
