  
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require("mongoose");
const morgan = require('morgan');
const methodOverride =require('method-override');
const path = require('path');

const connectDB = require('./server/database/connection');

const app = express();

dotenv.config( { path : 'config.env'} )
const PORT = process.env.PORT || 1515

// log requests
app.use(morgan('tiny'));

// mongodb connection
connectDB();

// parse request to body-parser
app.use(methodOverride('_method'));


// set view engine
app.set("view engine", "ejs")
//app.set("views", path.resolve(__dirname, "views/ejs"))

// load assets
app.use('/css', express.static(path.resolve(__dirname, "asset/css")))
app.use('/img', express.static(path.resolve(__dirname, "asset/img")))
app.use('/js', express.static(path.resolve(__dirname, "asset/js")))

// load routers
app.use('/', require('./server/routes/router'))

app.listen(PORT, ()=> { console.log(`Server is running on http://localhost:${PORT}`)});