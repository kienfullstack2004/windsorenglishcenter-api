import express from "express";
import cors from "cors";
import route from "./routes"
require("dotenv").config();
require('./connectDatabase')

const port = process.env.PORT || 8000;
const app = express();


app.use(cors({
    origin: process.env.CLIENT_URL,
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}))

app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

route(app)

const listener = app.listen(port, () => {
    console.log('Server is running on port ' + listener.address().port)
})