

/* Exportando el paquete http */
var http = require("http");

/* Exportando el paquete urls */
var url = require("url");

function iniciar(router, handle) {
  /*
  router: funcion encargada de rutear las peticiones
  handle: encargado de manipular las peticiones
   */
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log("Petición para " + pathname + " recibida.");
    var content = router(handle, pathname)
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write(content);
    response.end();
  }

  http.createServer(onRequest).listen(8888);
  console.log("Servidor Iniciado.");
}

/* Exportando la funcion 'iniciar' */
exports.iniciar = iniciar;

