const auth = require("./auth");
const user = require("./user");
const admin= require( "./admin");
const news = require("./news");

const route = (app) => {
    app.use('/api/v1', auth)
    app.use('/api/v1', user)
    app.use('/api/v1', admin)
    app.use('/api/v1', news)
}

module.exports = route;