const express = require('express');
const routes = express.Router();

const userController = require('../controllers/userController');

routes.get('/user', userController.getAllUsers);

module.exports = routes;