function hola(nombre, miCallback) {
  setTimeout(() => {
    console.log(`Hola ${nombre}`);
    miCallback(nombre);
  }, 100);
}

function hablar(callbackHablar) {
  setTimeout(() => {
    console.log("Blablabla");
    callbackHablar();
  }, 100);
}

function adios(nombre, otroCallback) {
  setTimeout(() => {
    console.log(`Adios ${nombre}`);
    otroCallback();
  }, 100);
}

function conversacion(nombre, veces, callback) {
  if (veces > 0) {
    hablar(() => {
      conversacion(nombre, veces - 1, callback);
    });
  } else {
    callback(nombre);
  }
}

//...

console.log("Iniciando proceso..");
hola("Carlos", nombre => {
  conversacion(nombre, 3, () => {
    adios(nombre, () => {});
  });
});

// hola("Carlos", () => {
//   adios("Carlos", () => {
//     console.log("Terminamos");
//   });
// });

hola("Carlos", () => {
  hablar(() => {
    hablar(() => {
      hablar(() => {
        adios("Carlos", () => {
          console.log("Terminando proceso..");
        });
      });
    });
  });
});
