const http = require('http')
const fs = require('fs') 

const portNumber = process.argv[2]
const path = process.argv[3]

const server = http.createServer( (request,response) => {
    response.writeHead(200, {'content-type' : 'text/plain'})
    // Both request and response are also Node streams! 
    const sourceStream = fs.createReadStream(path)
    sourceStream.pipe(response)
})


// 
server.listen(portNumber)
