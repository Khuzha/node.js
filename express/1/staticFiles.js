const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use('/static' /* - this is URL*/, express.static('static') /* - this is folder */)
// this was intermediate software

app.get(['/', '/index'], (req, res) => {
    res.sendFile(__dirname + '/new.html')
})

app.get('/news/', (req, res) => {
    res.render()
})

app.get('/news/:id', (req, res) => {
    obj = {
        title: 'Neuigkeit',
        arr: ['Это новость', 'Она интересная', 'Она о технологиях', 'Ей присвоена категория - 5']
    }
    res.render('news', {newsId: req.params.id, extra: obj}) // search file (first arguement) in the folder 'views'
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.listen(3000)