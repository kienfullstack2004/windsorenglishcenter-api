
const db = require("../models");

class UserService {


    signupforatriallessonService = ({ name, phone, age }) => new Promise(async (resolve, reject) => {
        try {

            if (age === '1') {
                age = '3-6 tuổi'
            } else if (age === '2') {
                age = '6-11 tuổi'
            } else if (age === '3') {
                age = '11-16 tuổi'
            } else {
                age = age;
            }

            const response = await db.SignUpFreeLesson.create({
                name,
                phone,
                age: age
            })

            resolve({
                err: response ? 0 : 1,
                msg: response ? 'Register lesson trial is successfully !' : 'Register less trial is fail !',
            })
        } catch (error) {
            reject(error)
        }
    })

    // Get All
    getAllSignUpLessonTrialService = () => new Promise(async (resolve, reject) => {
        try {
            const response = await db.SignUpFreeLesson.findAll({})
            resolve({
                err: response ? 0 : 1,
                data: response
            })
        } catch (error) {
            reject(error)
        }
    })

    // Get false
    getAllFalseSignUpLessonTrialService = () => new Promise(async (resolve, reject) => {
        try {
            const response = await db.SignUpFreeLesson.findAll(
                {
                    where: {
                        isFree: 0
                    }
                }
            )
            resolve({
                err: response ? 0 : 1,
                data: response
            })
        } catch (error) {
            reject(error)
        }
    })

    // Get True
    getAllTrueSignUpLessonTrialService = () => new Promise(async (resolve, reject) => {
        try {
            const response = await db.SignUpFreeLesson.findAll(
                {
                    where: {
                        isFree: 1
                    }
                }
            )
            resolve({
                err: response ? 0 : 1,
                data: response
            })
        } catch (error) {
            reject(error)
        }
    })

    signupRecruitmentService = ({ name, phone, position }) => new Promise(async (resolve, reject) => {
        try {

            if (position === 'giaovien') {
                position = 'Giáo viên'
            } else if (position === 'trogiang') {
                position = 'Trợ giảng'
            } else if (position === 'nhanvientuvan') {
                position = 'Nhân viên tư vấn'
            } else {
                position = position;
            }

            const response = await db.SignUpRecruitment.create({
                name,
                phone,
                position
            })

            resolve({
                err: response ? 0 : 1,
                msg: response ? 'Register recruitment is successfully !' : 'Register recruitment is fail !',
            })
        } catch (error) {
            reject(error)
        }
    })

    // Get All
    getAllSignUpRecruitmentService = () => new Promise(async (resolve, reject) => {
        try {
            const response = await db.SignUpRecruitment.findAll({})
            resolve({
                err: response ? 0 : 1,
                data: response
            })
        } catch (error) {
            reject(error)
        }
    })

    // Get false
    getAllFalseSignUpRecruitmentService = () => new Promise(async (resolve, reject) => {
        try {
            const response = await db.SignUpRecruitment.findAll(
                {
                    where: {
                        isRecruitment: 0
                    }
                }
            )
            resolve({
                err: response ? 0 : 1,
                data: response
            })
        } catch (error) {
            reject(error)
        }
    })

    // Get True
    getAllTrueSignUpRecruitmentService = () => new Promise(async (resolve, reject) => {
        try {
            const response = await db.SignUpRecruitment.findAll(
                {
                    where: {
                        isRecruitment: 1
                    }
                }
            )
            resolve({
                err: response ? 0 : 1,
                data: response
            })
        } catch (error) {
            reject(error)
        }
    })

    // Update
    updateSignUpFreeLesson = ({ id }) => new Promise(async (resolve, reject) => {
        try {
            const response = await db.SignUpFreeLesson.update({
                isFree: 1
            }, {
                where: {
                    id
                }
            })
            resolve({
                err: response ? 0 : 1,
                msg: response ? 'Update is successfully!' : 'Update is fail'
            })
        } catch (error) {
            reject(error)
        }
    })

    // Get Count isFree
    getCountAllIsFee = () => new Promise(async (resolve, reject) => {
        try {
            const response = await db.SignUpFreeLesson.count({
                where: {
                    isFree: 0
                }
            })
            resolve({
                err: response ? 0 : 1,
                msg: response ? 'Get successfully!' : 'Get fail',
                data: response
            })
        } catch (error) {
            reject(error)
        }
    })
    // Get Count isRecruitment
    getCountAllIsRecruitment = () => new Promise(async (resolve, reject) => {
        try {
            const response = await db.SignUpRecruitment.count({
                where: {
                    isRecruitment: 0
                }
            })
            resolve({
                err: response ? 0 : 1,
                msg: response ? 'Get successfully!' : 'Get fail',
                data: response
            })
        } catch (error) {
            reject(error)
        }
    })

    // Delete isRecruitment
    deleteRecruitment = ({ id }) => new Promise(async (resolve, reject) => {
        try {
            const response = await db.SignUpRecruitment.destroy({
                where: {
                    id: id
                }
            })
            resolve({
                err: response ? 0 : 1,
                msg: response ? 'Delete is sucessfully !' : 'Delete is fail !'
            })
        } catch (error) {
            reject(error)
        }
    })

    deleteRecruitmentAll = () => new Promise(async (resolve, reject) => {
        try {
            const response = await db.SignUpRecruitment.truncate()
            resolve({
                err: response ? 0 : 1,
                msg: response ? 'Delete all is successfully !' : 'Delete is fail'
            })
        } catch (error) {
            reject(error)
        }
    })

    // Delete isFree
    deleteFreeLesson = ({ id }) => new Promise(async (resolve, reject) => {
        try {
            const response = await db.SignUpFreeLesson.destroy({
                where: {
                    id: id
                }
            })
            resolve({
                err: response ? 0 : 1,
                msg: response ? 'Delete is sucessfully !' : 'Delete is fail !'
            })
        } catch (error) {
            reject(error)
        }
    })

    getCurrentUserService = (id) => new Promise(async (resolve, reject) => {
        try {
            const response = await db.User.findOne({
                where: {
                    id
                },
                attributes: ["id", "name", "phone", "avatar"],
                include: [
                    { model: db.Role, as: 'roleData', attributes: ['value'] }
                ]
            })
            resolve({
                err: response ? 0 : 1,
                msg: response ? 'Get user successfully!' : 'Get user fail!',
                data: response
            })
        } catch (error) {
            reject(error)
        }
    })

    getAllAttractiveService = () => new Promise(async (resolve, reject) => {
        try {
            const response = await db.Attractive.findAll({})
            resolve({
                err: response ? 0 : 1,
                msg: response ? 'Get' : 'Fail!',
                data: response
            })
        } catch (error) {
            reject(error)
        }
    })

}

module.exports = new UserService();