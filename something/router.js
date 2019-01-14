const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    switch (req.url) {
        case '/':
        case '/index':
            res.writeHead(200, {'Content-Type': 'text/html, charset=utf-8'})
            // res.end('<h1>The main page.</h1>')
            fs.createReadStream('./new.html').pipe(res)
        default: 
            res.writeHead(404, {'Content-Type': 'text/html, charset=utf-8'})
            res.end('<h1>Page not found</h1>')
    }
})

server.listen(3000, '192.168.0.103')