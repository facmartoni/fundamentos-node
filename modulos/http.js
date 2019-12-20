const http = require("http");

const router = (request, response) => {
  console.log("Nueva petición!");
  console.log(request.url);

  try {
    switch (request.url) {
      case "/hola":
        let saludo = hola();
        response.write(saludo);
        response.end();
        break;
      default:
        response.write("Error 404: No se lo que quieres");
        response.end();
    }
  } catch (err) {
    console.log("Error " + err.message);
  }

  //Escribir cabeceras
  // response.writeHead(201, {
  //   "Content-Type": "text/plain"
  // });

  //Escribir respuesta al usuario
  // response.write("Hola, ya se usar HTTP de NodeJS");

  // response.end();
};

http.createServer(router).listen(3000);

console.log("Escuchando http en el puerto 3000");

function hola() {
  return "Hola, que tal D:";
}
