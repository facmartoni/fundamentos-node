console.time("todo");

// Bucle 1

let suma = 0;

console.time("bucle");

for (let i = 0; i < 10000000; i++) {
  suma++;
}

console.timeEnd("bucle");

// Bucle 2

let suma2 = 0;

console.time("bucle2");

for (let j = 0; j < 10000000; j++) {
  suma2++;
}

console.timeEnd("bucle2");

console.timeEnd("todo");

// Funciones asíncronas

const asincrona = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Termina el proceso asíncrono");
      resolve();
    });
  });
};

console.time("asíncrono");
console.log("Empieza el proceso asíncrono");
asincrona().then(() => {
  console.timeEnd("asíncrono");
});
