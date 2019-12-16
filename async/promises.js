function hola(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Hola ${nombre}`);
      resolve(nombre);
    }, 100);
  });
}

function hablar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Blablabla");
      //   resolve(nombre);
      reject();
    }, 100);
  });
}

function adios(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Adios ${nombre}`);
      resolve();
    }, 100);
  });
}

// ...

console.log("Iniciando el proceso...");

hola("Carlos")
  .then(hablar)
  .then(adios)
  .then(nombre => {
    console.log("Terminado el proceso...");
  })
  .catch(error => {
    console.log("Error: " + error);
  });
