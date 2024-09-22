import express from "express";
const route = express.Router();

import * as controllers from "../controllers"

// Post News
route.post('/createNews',controllers.createNews)

// Get All News
route.get('/getAllNews',controllers.getAllNews)

// Create Image
route.post('/createAttractive',controllers.createAttractive)

module.exports = route;