const http = require('http')
const fs = require('fs') 
const map = require('through2-map')

const portNumber = process.argv[2]

const server = http.createServer( (request,response) => {
    if (request.method !== 'GET') {
        return response.end('send me a GET\n')
    }

    // URL will be something like /api/parsetime?iso=2013-08-10T12:10:15.474Z
    if (request.url.split('?')[0] !== '/api/parsetime' && request.url.split('?')[0] !== '/api/unixtime' ) {
        response.writeHead(404)
        return response.end(`Url is invalid: ${request.url} \n`)
    }

    let isoDate = request.url.split('=')[1]
    const date = new Date(isoDate)
    let result

    if(request.url.split('?')[0] === '/api/parsetime') {
        result = {
            'hour': date.getHours(),
            'minute': date.getMinutes(),
            'second': date.getSeconds()
        }
    } else {
        result = {
            'unixtime' : date.getTime()
        }
    }

    response.writeHead(200,{'Content-Type':'application/json'})

    return response.end(JSON.stringify(result))
})

server.listen(portNumber)
