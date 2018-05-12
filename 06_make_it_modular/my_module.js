const fs = require('fs')
const path = require('path')

module.exports = function (directoryName, fileExtension, callback){
    fs.readdir(directoryName, (err,files) => {
        if (err)
            return callback(err)

        files = files.filter( (file) => {
            return path.extname(file) === '.'+fileExtension
        })

        callback(null,files)
    })
}