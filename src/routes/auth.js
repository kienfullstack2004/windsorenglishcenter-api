const express = require("express");
const route = express.Router();
const controllers = require("../controllers/Auth");



route.post('/register',controllers.register)
route.post('/login',controllers.login)

module.exports = route;