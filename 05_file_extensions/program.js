const fs = require('fs')
const path = require('path')

const fileList = process.argv[2];
const fileExtension = '.'+process.argv[3];

fs.readdir(fileList, (error, files) => {
    if(error)
        console.error(error)
    files.forEach( (file, index) => {
        if(path.extname(file) == fileExtension)
            console.log(file);
    })
})



