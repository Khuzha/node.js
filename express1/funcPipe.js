const fs = require('fs')
const request = require('request')
const http = require('http')
let html = ''

let parser = async () => {
    html = await request('https://t.me/mudak/23527', (err, res, body) => {
        if (err) console.log(err)
        return body
    })
    
    const myReader = fs.createReadStream('./text.txt', 'utf8') //reading file by chunks
    const myWriter = fs.createWriteStream('./new.html') //writing file by chunks
    html.pipe(myWriter)

    const server = http.createServer((req, res) => {
        req.url != '/favicon.ico' ? console.log('URL:' + req.url) : true 
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'})
        
        const myReader = fs.createReadStream('./new.html', 'utf8')
        myReader.pipe(res)
    })
    
    server.listen(3000, '192.168.0.103')
}

parser()