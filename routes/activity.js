const router = require('express').Router()
const { check } = require('express-validator')
const { insertActivity, deleteActivity, deleteAllActivity, listActivity } = require('../services/activity')
router.post('/insert', [
    check('u_username').not().isEmpty(),
    check('u_activity').not().isEmpty()
], async(req, res)=>{
    try{
        req.validate()
        const created = await insertActivity(req.body)
        res.json(created)
    }catch(ex){
        res.error(ex)
    }
})
router.post('/delete', [
    check('u_username').not().isEmpty(),
    check('u_activity').not().isEmpty()
], async(req, res)=>{
    try{
        req.validate()
        const created = await deleteActivity(req.body)
        res.json(created)
    }catch(ex){
        res.error(ex)
    }
})
router.post('/deleteAll', [
    check('u_username').not().isEmpty()
], async(req, res)=>{
    try{
        req.validate()
        const created = await deleteAllActivity(req.body)
        res.json(created)
    }catch(ex){
        res.error(ex)
    }
})
router.post('/list', [
    check('u_username').not().isEmpty()
], async(req, res)=>{
    try{
        req.validate()
        const created = await listActivity(req.body)
        res.json(created)
    }catch(ex){
        res.error(ex)
    }
})
module.exports = router
