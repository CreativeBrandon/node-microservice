import * as mongoose from "mongoose";
import * as bluebird from 'bluebird';
import { config } from '../config';

export const options = {
    useMongoClient: true,
    user: 'myUserName',
    pass: 'myPassword',
    promiseLibrary: bluebird
}

export const connect = () => {
    createConnection()
        .then((db: mongoose.Connection) => {
            return db
        })
        .catch((err: Error) => {
            console.warn(err.message, `mongoose connection error: ${new Date()}`)
            process.exit(1)
        })
}

const createConnection = async () => {
    return await new Promise((resolve, reject) => {
        const connection = mongoose.createConnection(`${config.MONGO.CONNECTION}/${config.MONGO.DB_NAME}`, options)

        connection.on('error', (err: any) => {
            reject(err)
        })
        connection.once('open', (db: any) => {
            resolve(db)
            console.log(`Mongo Connection Successfull at: ${new Date()}`)
        })
    })
}

