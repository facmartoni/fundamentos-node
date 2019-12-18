//Ejecuta algo cada cierto tiempo
let i = 0;
let intervalo = setInterval(() => {
  if (i === 3) {
    clearInterval(intervalo);
  }
  i++;
  console.log("Hola");
}, 500);

//Realiza algo de manera inmediata
setImmediate(() => {
  console.log("Hola");
});

//Devuelve la dirección de la carpeta actual
console.log(__dirname);

//Devuelve la dirección del archivo actual
console.log(__filename);

//Declaración de variables globales
global.miVariable = "elValor";
console.log(miVariable);
