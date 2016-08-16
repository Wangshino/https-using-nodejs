var https = require('https')
var fs = require('fs')

var option = {
	key: fs.readFileSync('./keys/server.key'),
	cert: fs.readFileSync('./keys/server.crt')
}

https.createServer(option, function(req, res) {
	res.writeHead(200)
	res.end('helloworld')
}).listen(8000)