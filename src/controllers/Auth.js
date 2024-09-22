import * as services from "../services"
import { interalServerError } from "../middlewares/handle_errors";

export const register = async (req, res, next) => {
   try {
      const { phone, password, name } = req.body;

      if (!phone || !password || !name) {
         return res.status(404).json({
            err: 1,
            msg: 'Missing input!'
         })
      }

      const response = await services.registerServices(req.body);
      return res.status(200).json(response)
   } catch (error) {
      return interalServerError(res)
   }
}

export const login = async (req, res, next) => {
   try {
      const { phone, password } = req.body
      if (!phone || !password) {
         return res.status(404).json({
            err: 1,
            msg: 'Missing input!'
         })
      }
      const response = await services.loginServices(req.body);
      return res.status(200).json(response)
   } catch (error) {
      return interalServerError(res)
   }
}