const fs = require('fs')

const myReader = fs.createReadStream('./text.txt', 'utf8') //reading file by chunks
const myWriter = fs.createWriteStream('./newTextFile.txt') //writing file by chunks

myReader.on('data', chunk => { 
    console.log(chunk.toString())
    myWriter.write(chunk)
})