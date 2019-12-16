async function hola(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Hola ${nombre}`);
      resolve(nombre);
    }, 100);
  });
}

async function hablar(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Blablabla");
      resolve(nombre);
    }, 100);
  });
}

async function adios(nombre) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Adios ${nombre}`);
      resolve();
    }, 100);
  });
}

async function main() {
  let nombre = await hola("Carlos");
  await hablar();
  await adios(nombre);
  console.log("Terminamos el proceso");
}

console.log("Empezamos el proceso");
main();
