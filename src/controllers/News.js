 const services = require("../services/news");
const {interalServerError} = require("../middlewares/handle_errors");

class News {
    getOneNew = async (req, res, next) => {
        try {
            const {id}  = req.params;
            
            if (!id) {
                return res.status(404).json({
                    err: 1,
                    msg: "Id is emtry !"
                })
            }
            const response = await services.getOneNewServices(id);
            return res.status(200).json(response)
        } catch (error) {
            return interalServerError(res);
        }
    }
}

 module.exports = new News();