const connection = require('../configs/database')
const { password_hash } = require('../configs/security')
// create user model
const modelUser = connection.model('User', { u_username: String, u_password: String })
module.exports = {
    onRegister(value){
        return new Promise((resolve, reject) => {
            value.u_password = password_hash(value.u_password)
            // create instance from user
            const newUser = new modelUser({ u_username: value.u_username, u_password: value.u_password })
            // save to database (return as Promise)
            newUser.save().then(res => resolve({ status: 'registered' })).catch(err => reject({ status: 'registered' }))
            
        })
    },
    onLogin(value){
        return new Promise((resolve, reject) => {
            modelUser.find({ u_username: value.u_username, u_password: password_hash(value.u_password) }).select('u_username').then(res => resolve(res)).catch(err => reject(err))
        })
    }
}