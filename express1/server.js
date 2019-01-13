const http = require('http')

const server = http.createServer((req, res) => {
    req.url != '/favicon.ico' ? console.log('URL:' + req.url) : true 
    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'})
    res.end('Hallo, Welt! Кек')
})

server.listen(3000, '192.168.0.103')