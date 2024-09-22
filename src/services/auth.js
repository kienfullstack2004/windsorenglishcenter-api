import db from "../models"
import bcryptjs from "bcryptjs"
import { v4 } from "uuid"
import jwt from "jsonwebtoken"

const hashPass = (password) => bcryptjs.hashSync(password, bcryptjs.genSaltSync(8));

export const registerServices = ({ name, password, phone }) => new Promise(async (resolve, reject) => {
   try {
      const response = await db.User.findOrCreate({
         where: {
            phone
         },
         defaults: {
            name,
            password: hashPass(password),
            phone,
            id: v4()
         }
      })

      resolve({
         err: response[1] ? 0 : 1,
         msg: response[1] ? 'Register is successfully !' : 'Account is used!'
      })

   } catch (error) {
      reject(error)
   }
})

export const loginServices = ({ phone, password }) => new Promise(async (resolve, reject) => {
   try {
      const response = await db.User.findOne({
         where: { phone },
         raw: true
      })
      const isPassword = response && bcryptjs.compareSync(password, response.password);

      const token = isPassword ? jwt.sign({ id: response.id, name: response.name,role_code:response.role_code }, process.env.JWT_SECRET, { expiresIn: '2d' }) : null

      resolve({
         err: token ? 0 : 1,
         msg: token ? "Login is successfully !" : response ? "Password is wrong!" : 'Acount is not registed',
         access_token:token
      })

   } catch (error) {
      reject(error)
   }
})