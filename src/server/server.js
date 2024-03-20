const express = require('express');
const formRouter = require('../routes/formRouter');
const externalApiRouter =require('../routes/externalApiRouter');
const server = express();

server.use(express.json());
server.use('/api/surveying', formRouter);
server.use('/api/external', externalApiRouter)

module.exports= server;
