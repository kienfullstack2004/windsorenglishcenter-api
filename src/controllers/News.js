import * as services from "../services"
import {interalServerError} from "../middlewares/handle_errors"

export const getOneNew = async (req, res, next) => {
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