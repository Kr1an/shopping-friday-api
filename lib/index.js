import http from 'http';

const PORT = 3000;

http.createServer((req, res) => {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Hello World#version_2\n');
}).listen(PORT, '0.0.0.0'); 

console.log('Listening on port: ' + PORT);
