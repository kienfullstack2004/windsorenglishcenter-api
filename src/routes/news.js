import express from "express"

const route = express.Router();

import * as controlles from "../controllers"

route.get('/getOneNew/:id',controlles.getOneNew)

export default route;