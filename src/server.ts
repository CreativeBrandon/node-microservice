import * as bodyParser from "body-parser";
import { config } from './config';
import * as cors from "cors";
import * as express from 'express';
import * as mongoose from "mongoose";
import expressValidator = require("express-validator")
import * as home from "./home/home";
import * as mongo from "./utils/mongo";

const app = express()

// Connection to DB
 mongo.connect()

// Middlewares
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

// Set App Vars
app.set('env', config.ENV)
app.set('port', config.PORT)

// Features
home.routes(app)

export default app;
