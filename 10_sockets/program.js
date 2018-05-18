const net = require('net')
const strftime = require('strftime') 

const portNumber = process.argv[2];

// result
// "YYYY-MM-DD hh:mm"
const server = net.createServer( (socket) => {
    var data = strftime('%Y-%m-%d %R')+'\n'
    socket.write(data)
    socket.end()
})

server.listen(portNumber)
