const router = require('express').Router()
const { check } = require('express-validator')
const { onRegister, onLogin } = require('../services/account')
// Add new user
router.post('/register', [
    check('u_username').not().isEmpty(),
    check('u_password').not().isEmpty()
], async (req, res) => {
    try{
        req.validate()
        const created = await onRegister(req.body)
        res.json(created)
    }catch(ex){
        res.error(ex)
    }
})
// Check User Login Session
router.post('/login', [
    check('u_username').not().isEmpty(),
    check('u_password').not().isEmpty()
], async (req, res) => {
    try{
        req.validate()
        const created = await onLogin(req.body)
        req.session.userLogin = created
        res.json(created)
    }catch(ex){
        res.error(ex)
        
    }
})
// Get User Login Session
router.post('/getUserLogin',(req, res)=>{
    try{
        if(req.session.userLogin){
            return res.json(req.session.userLogin)
        }
        throw new Error('UnAutherize.')
        
    }
    catch(ex){
        res.error(ex, 401)
    }
    
})
//Delete Session
router.post('/logout',(req, res)=>{
    try{
        delete req.session.userLogin
        res.json({ message: 'logout' })
    }catch(ex){
        res.error(ex)
    }
})
module.exports = router