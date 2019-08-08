const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');


const server = express();

mongoose.connect('mongodb+srv://ricardo:ricardo01@cluster0-ysem0.mongodb.net/tindev?retryWrites=true&w=majority', {
    useNewUrlParser: true
})

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333, function(){
    console.log('Server running');
})