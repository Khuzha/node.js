const readline = require('readline')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question('How old are you?', value => {
    let age = value
    console.log('You entered ${age}')
    rl.close()
})
