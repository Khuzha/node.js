const express = require('express')
const session = require('express-session')

const app = express()

app.use(session({
    genid: req => {
        console.log
        console.log(req.sessionID)
        return uuid()
    },    
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))