const express= require('express');
const externalApiController = require('../controllers/externalApiController');
const externalApiRouter = express.Router();


externalApiRouter.get('/', externalApiController);


module.exports = externalApiRouter;