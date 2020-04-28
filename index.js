const express = require('express')
const server = express()
const PORT = 3000
const expressSession = require('express-session')
const bodyParser = require('body-parser')
const router = require('./routes')

// Session setting for system
server.use(expressSession({
    secret: 'qwerty',
    resave: false,
    saveUninitialized: true,
    cookie: {}
  }))
// parser setting when client sent request
server.use(bodyParser.urlencoded({ extended: false }))
server.use(bodyParser.json())
// create custom functions
server.use(require('./configs/middleware'));
// Call routes
server.use('/api', router)
server.get('*', (req, res) => {
    res.end('Backend server is starting.')
})

server.listen(PORT, () => console.log(`server start. Port ${PORT}`))