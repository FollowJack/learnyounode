const http = require('http')
const fs = require('fs') 
const map = require('through2-map')

const portNumber = process.argv[2]

const server = http.createServer( (request,response) => {
    if (req.method !== 'POST') {
        return res.end('send me a POST\n')
    }

    request.pipe(map( (chunk) => {
        return chunk.toString().toUpperCase()
    })).pipe(response)    
})

server.listen(portNumber)
