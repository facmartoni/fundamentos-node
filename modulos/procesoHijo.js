const { exec, spawn } = require("child_process");

exec("ls", (err, stdout, stderr) => {
  if (err) {
    console.error(err);
    return false;
  }
  console.log(stdout);
});

let proceso = spawn("ls", ["-la"]);

console.log(proceso.connected);
console.log(proceso.pid);

proceso.stdout.on("data", dato => {
  console.log("¿Está muerto? " + proceso.killed);
  console.log(dato.toString());
});

proceso.on("exit", () => {
  console.log("El proceso terminó");
  console.log("¿Está muerto? " + proceso.killed);
});
