function otraFuncion() {
  seRompe();
}

function seRompe() {
  return 3 + z;
}

function seRompeAsincrona(cb) {
  setTimeout(() => {
    try {
      return 3 + z;
    } catch (err) {
      console.error("Error en mi función asíncrona");
      cb(err);
    }
  });
}

try {
  //   otraFuncion();
  seRompeAsincrona(err => {
    console.log(err.messsage);
  });
} catch (error) {
  console.log("Algo se ha roto D:");
  console.error(error.messsage);
  console.log("Pero no pasa nada, lo hemos capturado...");
}

console.log("Esto de aquí está al final");
