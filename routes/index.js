const router = require('express').Router()
const account = require('./account')
const activity = require('./activity')
// create account route
router.use('/account', account)
router.use('/activity', activity)
module.exports = router