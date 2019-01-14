const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.get(['/', '/index'], (req, res) => {
    res.sendFile(__dirname + '/new.html')
})

app.get('/news/:id', (req, res) => {
    obj = {
        title: 'Neuigkeit',
        arr: ['Это новость', 'Она интересная', 'Она о технологиях', 'Ей присвоена категория - 5']
    }
    res.render('news', {newsId: req.params.id, extra: obj}) // search file (first arguement) in the folder 'views'
})

app.listen(3000)