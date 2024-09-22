import db from "../models"

export const getOneNewServices = (id) => new Promise(async (resolve, reject) => {
    try {
        const response = await db.News.findOne({
            where: {id},
            attributes:{
               exclude:["idImage","createdAt","updatedAt","id"]
        },
             include:[
                {model:db.Images,as:'dataImage',attributes:["image"]}
            ]
        })
        
        resolve({
            err: response ? 0 : 1,
            msg:response ? 'Get is successfully !' : 'get is faild',
            data: response ? response : null
        })
    } catch (error) {
        return reject(error)
    }
})