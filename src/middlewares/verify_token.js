const jwt = require("jsonwebtoken");


class Verify_Token{
    verifyToken = (req, res, next) => {
        const token = req.headers.authorization
        if (!token) {
            return res.status(404).json({
                err: 1,
                msg: 'Required Authorization'
            })
        }
        let accessToken = token.split(' ')[1]
        jwt.verify(accessToken, process.env.JWT_SECRET, (err, user) => {
            if (!err) {
                req.user = user;
                next();
            }
        })
    
    }
}

module.exports = new Verify_Token();