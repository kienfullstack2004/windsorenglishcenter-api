const createHttpError = require("http-errors");

class HanddleError
{
  
 badRequest = (err, res) => {
    const error = createHttpError.BadRequest(err);
    return res.status(error.status).json({
        err: 0,
        msg: error.message
    })
}

 interalServerError = (res) => {
    const error = createHttpError.InternalServerError();
    return res.status(error.status).json({
        err: 0,
        msg: error.message
    })
}
}

module.exports = new HanddleError();