
var express = require('express')
const db = require('./db.js')
const person = require('./model/person.js')
const menu = require('./model/menu.js')
var bodyParser = require('body-parser')
const personRouter = require('./routes/personRoutes.js')
const menuRouter = require('./routes/menuRoutes.js')
const dotenv = require("dotenv").config();
const passport=require('./auth.js');


//middleware function (it will give the time and endpoint when call is executed)
const logRequest = (req, res, next) => {
    console.log(`[${new Date().toLocaleString()}] request made to :${req.originalUrl}`);
    next();
}


const app = express();
app.use(bodyParser.json());

app.use(logRequest)




app.use(passport.initialize());

const localAuthMiddleware = passport.authenticate('local', { session: false })

app.get('/', function (req, res) {
    res.send("welcome");
})
app.use('/person', localAuthMiddleware, personRouter);


app.use('/menu', menuRouter)

const Port = process.env.Port

app.listen(Port, () => {
    console.log("server running on port 3000");
})
