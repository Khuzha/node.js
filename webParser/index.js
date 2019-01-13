const request = require('request')

request('https://t.me/mudak/23527', (err, res, body) => {
    if (err) console.log(err)
    console.log(body)
})