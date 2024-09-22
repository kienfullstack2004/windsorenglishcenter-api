import createHttpError from "http-errors";

export const badRequest = (err, res) => {
    const error = createHttpError.BadRequest(err);
    return res.status(error.status).json({
        err: 0,
        msg: error.message
    })
}

export const interalServerError = (res) => {
    const error = createHttpError.InternalServerError();
    return res.status(error.status).json({
        err: 0,
        msg: error.message
    })
}