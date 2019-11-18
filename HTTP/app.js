// const http = require('http');
// const server = http.createServer((req, res) => {
//     // res.write('Hello world from node.js');
//     // res.end();
//     if(req.url === '/'){
//         res.write('Hello world from node.js');
//         res.end();
//     }
//     else{
//         res.write('Using other domain');
//         res.end();
//     }

// });

// server.listen('5000');

// const http = require('http');
// const fs = require('fs');
// http.createServer((req, res) => {
//     const readStream = fs.createReadStream('./static/index.html');
//     res.writeHead(200, {'Content-type': 'text/html'});
//     readStream.pipe(res);
    

// }).listen(5000);

const http = require('http');
const fs = require('fs');
http.createServer((req, res) => {
    const readStream = fs.createReadStream('./static/example.json');
    res.writeHead(200, {'Content-type': 'application/json'});
    readStream.pipe(res);
    

}).listen(5000);