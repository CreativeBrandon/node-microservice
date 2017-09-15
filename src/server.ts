import * as bodyParser from "body-parser";
import { config } from './config';
import * as cors from "cors";
import * as express from 'express';
import expressValidator = require("express-validator")
import * as mongo from "./utils/mongo";
import * as routes from "./routes";

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

// Routes
routes.init(app)

app.listen(app.get('port'), () => {
    console.log(("  App is running at http://localhost:%d in %s mode"), app.get('port'), app.get("env"))
    console.log("  Press CTRL-C to stop\n");
})
