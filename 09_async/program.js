const http = require('http')
const bl = require('bl')

var urlsArray = process.argv.slice(2)
var noOfUrls = urlsArray.length
var results = []
var count = 0



function httpGet(index) {
    http.get(urlsArray[index], (response) => {
        response.pipe(bl( (error, data) => {
            if(error)
                return console.error(error)
            
            results[index] = data.toString()

            count++
            if (count === noOfUrls) {
                printResults()
            }
        }))
    })
}

function printResults() {
    results.forEach((result) => {
        console.log(result)
    })
}

for (var i = 0; i < noOfUrls; i++) {
    httpGet(i)
}
    



