
var express = require('express')
const db = require('./db.js')
const person = require('./model/person.js')
const menu = require('./model/menu.js')
var bodyParser = require('body-parser')
const personRouter=require('./routes/personRoutes.js')
const menuRouter=require('./routes/menuRoutes.js')
const app = express();
app.use(bodyParser.json());



app.use('/person',personRouter);



app.use('/menu',menuRouter)



app.listen(3000, () => {
    console.log("server running on port 3000");
})
