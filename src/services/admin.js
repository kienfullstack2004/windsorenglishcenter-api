import db from "../models"
import { v4 } from "uuid"

// create News
export const createNewsService = ({ title, description, image, codeYTB, links }) => new Promise(async (resolve, reject) => {
    try {
        let codeImage = v4();
        let arrayImage = JSON.stringify(image);
        const response1 = await db.News.create({
            title,
            description,
            codeYTB,
            links,
            idImage: codeImage,
            id: v4()
        })
        const response2 = await db.Images.findOrCreate({
            where: {
                id: codeImage
            },
            defaults: {
                id: codeImage,
                image: arrayImage
            }
        })

        resolve({
            err: response1 && response2 ? 0 : 1,
            msg: response1 && response2 ? 'Create is successfully!' : 'Create fail !'
        })

    } catch (error) {
        reject(error)
    }
})

export const getAllNewsServices = () => new Promise(async(resolve,reject)=>{
    try {
        const response = await db.News.findAll({
            attributes:["title","description","createdAt","links","codeYTB","id"],
            include:[
                {model:db.Images,attributes:['image'],as:"dataImage"}
            ]
        })
        resolve({
            err:response ? 0 : 1,
            msg:response ? 'Get all is successfully !' : 'Get all is fail !',
            data: response
        })
    } catch (error) {
        reject(error)
    }
})

export const createAttractiveService = ({image}) => new Promise(async(resolve,reject)=>{
    try {
 
        let arrayImage = JSON.stringify(image)

        const response = await db.Attractive.create({
            id: v4(),
            images:arrayImage
        })
        resolve({
            err: response ? 0 : 1,
            msg: response ? 'Create is successfully!' : 'Create is fail!'
        })
    } catch (error) {
        reject(error)
    }
})