import auth from "./auth"
import user from "./user"
import admin from "./admin"
import news from "./news"

const route = (app) => {
    app.use('/api/v1', auth)
    app.use('/api/v1', user)
    app.use('/api/v1', admin)
    app.use('/api/v1', news)
}

module.exports = route;