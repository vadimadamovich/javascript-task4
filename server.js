const http = require('http')

var func_array = new Array()
const server = http.createServer((req, res) => {
	func_array.push(() => res.end('OK'))
})
server.listen(8080)

setInterval(() => {
	for (let i = 0; i < func_array.length; i++)
		func_array.forEach(func_array[i]())
	func_array = new Array()
}, 100)
