const fs = require('fs')
const path = process.argv[2];

fs.readFile(path, (error, data) => {
    if(error)
        console.error(error)
    let fileContent = data.toString()
    let newLineCounter = fileContent.split('\n').length - 1
    console.log(newLineCounter)
})



