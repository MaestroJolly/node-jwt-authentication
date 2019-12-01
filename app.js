"use strict";

const bodyParser = require('body-parser');
const config = require('./config/config');
const dotenv = require('dotenv').config({path:`${__dirname}/.env`});
const express = require('express');
const mongoose = require('mongoose');
const PORT = process.env.PORT || "3000";
const app = express();

const routes = require('./components/routes');

const mongoObject = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api', routes);

app.get('/', (req, res)=>{
    res.send({
        Greetings: "Hello World"
    });
});

mongoose.connect(config.url, mongoObject)
.then((response) =>{
    console.log('Database Connection Successful');
}).catch((error) =>{
    console.log(`An error has occurred with this error message - ${error}`);
});

app.listen(PORT, ()=>{
    console.log(`App is listening to PORT: ${PORT}`);
});