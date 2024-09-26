const services = require("../services/user");
const { interalServerError } = require("../middlewares/handle_errors");


class User{

    
// POST signupforatriallesson
 signupforatriallesson = async (req, res, next) => {
    try {
        const { name, phone, age } = req.body
        if (!name || !phone || !age) {
            return res.status(404).json({
                err: 0,
                msg: 'Missing Input !',
            })
        }
        const response = await services.signupforatriallessonService(req.body);
        return res.status(200).json(response)
    } catch (error) {
        return interalServerError(res)
    }
}
// POST signupRecruitment
 signupRecruitment = async (req, res, next) => {
    try {
        const { name, phone, position } = req.body
        if (!name || !phone || !position) {
            return res.status(404).json({
                err: 0,
                msg: 'Missing Input !',
            })
        }
        const response = await services.signupRecruitmentService(req.body);
        return res.status(200).json(response)
    } catch (error) {
        return interalServerError(res)
    }
}

// Get getAllSignUpForaTriallesson
 getAllSignUpForaTriallesson = async (req, res, next) => {
    try {
        const response = await services.getAllSignUpLessonTrialService();
        return res.status(200).json(response)
    } catch (error) {
        return interalServerError(res)
    }
}
// Get getAllsignupRecruitment
 getAllSignUpRecruitment = async (req, res, next) => {
    try {
        const response = await services.getAllSignUpRecruitmentService();
        return res.status(200).json(response)
    } catch (error) {
        return interalServerError(res)
    }
}

// GET False getAllSignUpForaTriallesson
 getAllFalseSignUpForaTriallesson = async (req, res, next) => {
    try {
        const response = await services.getAllFalseSignUpLessonTrialService();
        return res.status(200).json(response)
    } catch (error) {
        return interalServerError(res)
    }
}

// GET TRUE getAllSignUpForaTriallesson
 getAllTrueSignUpForaTriallesson = async (req, res, next) => {
    try {
        const response = await services.getAllTrueSignUpLessonTrialService();
        return res.status(200).json(response)
    } catch (error) {
        return interalServerError(res)
    }
}

// GET False getAllSignUpRecruitment
 getAllFalseSignUpRecruitment = async (req, res, next) => {
    try {
        const response = await services.getAllFalseSignUpRecruitmentService();
        return res.status(200).json(response)
    } catch (error) {
        return interalServerError(res)
    }
}

// GET TRUE getAllSignUpForaTriallesson
 getAllTrueSignUpRecruitment = async (req, res, next) => {
    try {
        const response = await services.getAllTrueSignUpRecruitmentService();
        return res.status(200).json(response)
    } catch (error) {
        return interalServerError(res)
    }
}
// Upadate
 updateOneFreeTrialLesson = async (req, res, next) => {
    try {
        const { id } = req.body
        if (!id) {
            return res.status(404).json({
                err: 1,
                msg: 'Error Id Wrong!'
            })
        }
        const response = await services.updateSignUpFreeLesson(req.body);
        return res.status(200).json(response)
    } catch (err) {
        return interalServerError(res)
    }
}

// Get Count
 getCountIsFree = async(req,res,next) => {
  try {
    const response = await services.getCountAllIsFee();
    return res.status(200).json(response)
  } catch (error) {
    return interalServerError(res)
  }
}
 getCountIsRecruitment = async(req,res,next) => {
  try {
    const response = await services.getCountAllIsRecruitment();
    return res.status(200).json(response)
  } catch (error) {
    return interalServerError(res)
  }
}

// Delete
 deleteIsRecruitment = async(req,res,next) => {
   try {
     const {id} = req.body;
     if(!id){
        return res.status(404).json({
            err:1,
            msg:'Id is emtry !'
        })
     }
     const response = await services.deleteRecruitment(req.body)
     return res.status(200).json(response)    
   } catch (error) {
    return interalServerError(res)
   }
}
 deleteIsFreeLesson = async(req,res,next) => {
   try {
     const {id} = req.body;
     if(!id){
        return res.status(404).json({
            err:1,
            msg:'Id is emtry !'
        })
     }
     const response = await services.deleteFreeLesson(req.body)
     return res.status(200).json(response)    
   } catch (error) {
    return interalServerError(res)
   }
}

 deleteIsRecruitmentAll = async(req,res,next) => {
    try {
      const response = await services.deleteRecruitmentAll()
      return res.status(200).json(response)    
    } catch (error) {
     return interalServerError(res)
    }
 }

 getCurrentUser = async(req,res) => {
    try {
      const {id} = req.user;
      const response = await services.getCurrentUserService(id);
      return res.status(200).json(response)        
    } catch (error) {
        return interalServerError(res)
    }
}



 getAllAttractive = async(req,res,next) => {
    try {
        const response = await services.getAllAttractiveService();
        return res.status(200).json(response)
    } catch (error) {
        return interalServerError(res)
    }
}

}

module.exports = new User();