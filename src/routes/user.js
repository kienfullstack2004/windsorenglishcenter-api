import express from "express";
const route = express.Router();
import * as controllers from "../controllers"
import { verifyToken } from "../middlewares/verify_token";
import { isAdmin } from "../middlewares/verify_roles";

// Route post
route.post('/signupforatriallesson',controllers.signupforatriallesson)
route.post('/signuprecruitment',controllers.signupRecruitment)

// Route get
route.get('/getAllSignUpForATrialLesson',controllers.getAllSignUpForaTriallesson)
route.get('/getAllFalseSignUpForATrialLesson',controllers.getAllFalseSignUpForaTriallesson)
route.get('/getAllTrueSignUpForATrialLesson',controllers.getAllTrueSignUpForaTriallesson)

// Route get
route.get('/getAllSignUpRecruitment',controllers.getAllSignUpRecruitment)
route.get('/getAllFalseSignUpRecruitment',controllers.getAllFalseSignUpRecruitment)
route.get('/getAllTrueSignUpRecruitment',controllers.getAllTrueSignUpRecruitment)

// Route update
route.put('/updateSignUpFreeLesson',controllers.updateOneFreeTrialLesson)


// Route get count
route.get('/getCountisFree',controllers.getCountIsFree)
route.get('/getCountisRecruitment',controllers.getCountIsRecruitment)

// Route delete
route.delete('/deleteRecruitment',controllers.deleteIsRecruitment);
route.delete('/deleteFreeLesson',controllers.deleteIsFreeLesson);
route.delete('/deleteRecruitmentAll',controllers.deleteIsRecruitmentAll);

// Get user current
route.get('/getCurrentUser',verifyToken,controllers.getCurrentUser)

// Get All attractive
route.get('/getAllAttractive',controllers.getAllAttractive)

module.exports = route;