const  services = require("../services/admin");
const { interalServerError } = require("../middlewares/handle_errors");

// create News

class Admin {
  
   createNews = async (req,res,next) => {
    try {
        const {image,title,description} = req.body;
        if(!image || !title || !description){
            return res.status(200).json({
                err:1,
                msg:'Required full input !'
            })
        }
        const response = await services.createNewsService(req.body)
        return res.status(200).json(response)
    } catch (error) {
        return interalServerError(res)
    }
}

 createAttractive = async(req,res,next) => {
    try {
        const {image} = req.body;
        if(!image){
            return res.status(404).json({
                err: 1,
                msg: 'Image is emtry'
            })
        }
        const response = await services.createAttractiveService(req.body)
        return res.status(200).json(response)
    } catch (error) {
        return interalServerError(res)
    }
}

getAllNews = async(req,res,next) => {
    try {
        const response = await services.getAllNewsServices();
        return res.status(200).json(response)
    } catch (error) {
        return interalServerError(res);
    }
}

}

module.exports = new Admin();

