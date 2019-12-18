//Imprimir un valor
console.log("Algo");

//Imprimir un valor (para uso avanzado)
console.info("Algo");

//Imprimir un error
console.error("Algo");

//Imprimir una advertencia
console.warn("Algo");

//Imprimir valores en forma de tabla
var tabla = [
  {
    a: 1,
    b: "Z"
  },
  {
    a: 2,
    b: "O"
  }
];
console.table(tabla);

//Agrupar logs
console.group("Conversación");
console.log("Hola");
console.log("Blablabla");
console.log("Adios");
console.groupEnd("Conversación");
console.log("Otra cosa");

//Imprimir un contador
console.count("veces");
console.count("veces");
console.count("veces");
console.countReset("veces");
console.count("veces");
