const fs = require('fs')
const path = require('path')

const 
fs.readdir(fileList, (error, files) => {
    if(error)
        console.error(error)
    files.forEach( (file, index) => {
        if(path.extname(file) == fileExtension)
            console.log(file);
    })
})