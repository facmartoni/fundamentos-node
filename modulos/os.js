const os = require("os");
const SIZE = 1024;
function kb(bytes) {
  return bytes / SIZE;
}

function mb(bytes) {
  return kb(bytes) / SIZE;
}

function gb(bytes) {
  return mb(bytes) / SIZE;
}

//Devuelve la arquitectura de nuestra computadora
console.log(os.arch());

//Devuelve la plataforma de nuestra computadora
console.log(os.platform());

//Muestra información sobre cada nucleo de nuestra PC
console.log(os.cpus());

//Muestra la cantidad de nucleos de nuestra PC
console.log(os.cpus().length);

//Muestra las constantes del sistema
console.log(os.constants);

//Muestra la memoria libre
console.log(gb(os.freemem()));

//Muestra la memoria total
console.log(gb(os.totalmem()));

//Muestra el directorio raiz del usuario
console.log(os.homedir());

//Muestra el directorio de archivos temporales
console.log(os.tmpdir());

//Muestra el host de la máquina
console.log(os.hostname());

//Muestra las interfaces de red
console.log(os.networkInterfaces());
