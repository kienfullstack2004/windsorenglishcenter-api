const express = require("express");
const route = express.Router();

const controllers  =  require("../controllers/Admin");

// Post News
route.post('/createNews',controllers.createNews)

// Get All News
route.get('/getAllNews',controllers.getAllNews)

// Create Image
route.post('/createAttractive',controllers.createAttractive)

module.exports = route;