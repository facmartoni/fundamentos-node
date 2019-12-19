process.on("beforeExit", () => {
  console.log("El proceso va a terminar");
});

process.on("exit", () => {
  console.log("Ale, el proceso acabó");
  //Una vez que el evento "exit" sucede nos deconectamos
  //completamente del event loop. Es decir, una función
  //como setTimeout no funcionaría
});

process.on("uncaughtException", (err, origen) => {
  console.error("Vaya, se nos ha olvidado capturar un error: ");
  console.error(err.message);
});

funcionQueNoExiste();

console.log("Esto si el error no se recoje, no sale");
