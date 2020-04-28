const connection = require('../configs/database')
// create activity model
const modelActivity = connection.model('Activity', { u_username: String, u_activity: String })
module.exports = {
    insertActivity(value){
        return new Promise((resolve, reject) => {
            // create instance from model activity
            const newActivity = new modelActivity({ u_username: value.u_username, u_activity: value.u_activity })
            // save to database (return as Promise)
            newActivity.save().then(res => resolve({ status: 'inserted' })).catch(err => reject(err))
        })
    },
    deleteActivity(value){
        return new Promise((resolve, reject) => {
            modelActivity.deleteOne({ u_username: value.u_username, u_activity: value.u_activity }).then(res => resolve({ status: 'deleted' })).catch(err => reject(err))
        })
    },
    deleteAllActivity(value){
        return new Promise((resolve, reject) => {
            modelActivity.deleteMany({ u_username: value.u_username }).then(res => resolve({ status: 'deletedAll' })).catch(err => reject(err))
        })
    },
    listActivity(value){
        return new Promise((resolve, reject) => {
            modelActivity.find({ u_username: value.u_username }).select('u_activity').then(res => resolve(res)).catch(err => reject(err))
        })
    }
}