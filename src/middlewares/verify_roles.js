const { interalServerError } = require("./handle_errors");
require('dotenv').config()


class Verify{
    isAdmin = (req, res, next) => {
        try {
            const { role_code } = req.user;
            if (role_code === 'R1') {
                return res.location(`${process.env.CLIENT_URL}/he-thong/admin`);
            } else if (role_code === 'R2') {
                return res.redirect('/he-thong/admin');
            } else {
                next();
            }
        } catch (error) {
            return interalServerError(res);
        }
    }
    
}
 
module.exports = new Verify();