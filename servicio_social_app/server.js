

var http = require("http");


http.createServer(function(request, response) {
    console.log("Peticion")
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("Hola Mundo");
    response.end();
}).listen(8888);

console.log("Servidor Iniciado.");


