const express = require("express");

const route = express.Router();

const controlles = require("../controllers/News");

route.get('/getOneNew/:id',controlles.getOneNew)

module.exports = route;