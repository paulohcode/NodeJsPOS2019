const express = require('express');
const router = express.Router();

const { authenticationMiddleware } = require('../utils/token');
const controller = require('../controllers/tarefas');



module.exports = router;
