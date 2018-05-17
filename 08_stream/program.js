const http = require('http')
const bl = require('bl')

const url = process.argv[2]


http.get(url, (response) => {
    response.pipe(bl( (error, data) => {
        if(error) 
            console.error(error)
        console.log(data.length)
        console.log(data.toString())
        // integer number of characters
        // complete string
    }))
    //response.on('error', console.error())
})




