
/* Se encargara de enrutar las peticiones a la funcion que corresponda 
 * Segun el path
 **/
function route(handle, pathname) {
    /* 
    Handle: objeto encargado de distribuir las peticiones
    a la funcion correspondiente segun el path
    path: direccion a la que intenta acceder la peticion
    */
  console.log("A punto de rutear una peticion para " + pathname);
  if (typeof( handle[pathname]) == 'function'){
    return handle[pathname]();
  }
  else{
    console.log("No existe un manejador para el path: " + pathname);
    return "404 NOT FOUND"
  }
  //handle[pathname]();
}

/* exportando la funcion route */
exports.route = route;
