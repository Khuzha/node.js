const express = require('express')

const app = express()

app.get(['/', '/index'], (request, response) => {
    response.send('Hi')
})

app.get('/news', (req, res) => {
    res.send('The best news in the Universe')
})

app.get('/news/:type/:id', (req, res) => {
    res.send('Type: ' + req.params.type + '; id: ' + req.params.id)
})

app.listen(3000)