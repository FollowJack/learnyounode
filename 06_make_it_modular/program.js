const myModule = require('./my_module.js')
const fileList = process.argv[2]
const fileExtension = process.argv[3]

printFilelist = (error, files) => {
    if(error)
        console.log(error)

    files.forEach( (file, index) => {
        console.log(file)
    })
}

myModule(fileList,fileExtension, printFilelist)




