function asincrona(callback) {
  setTimeout(() => {
    try {
      let a = 3 + z;
      callback(null, a);
    } catch (err) {
      callback(err);
    }
  }, 500);
}

asincrona((err, data) => {
  if (err) {
    console.error("Tenemos un error: " + err.message);
    return false;
    // throw err; // NO VA A FUNCIONAR EN UNA FUNCIÓN ASÍNCRONA
  }

  console.log("Todo ha ido bien, mi data es: " + data);
});
