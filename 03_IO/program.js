const fs = require('fs')
const path = process.argv[2];

let buffer = fs.readFileSync(path)
let fileContent = buffer.toString()

let newLineCounter = fileContent.split('\n').length - 1



console.log(newLineCounter)