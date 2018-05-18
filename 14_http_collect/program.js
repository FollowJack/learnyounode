const http = require('http')
const bl = require('bl') 

const url = process.argv[2]

http.get(url, (response) => {
    response.pipe(bl( (error, data) => { 
        if(error) 
            console.error(error)

        // print results 
        const numberOfChars = data.length
        const message = data.toString()
        
        console.log(numberOfChars)
        console.log(message)
     }))
})