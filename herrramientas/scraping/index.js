const puppeteer = require("puppeteer");

(async () => {
  //Nuestro código

  console.log("Lanzamos navegador");
  const browser = await puppeteer.launch({
    headless: false // Muestra el navegador
  });

  const page = await browser.newPage();
  await page.goto("https://platzi.com");

  var titulo1 = await page.evaluate(() => {
    const h1 = document.querySelector("h1");
    return h1.innerHTML;
  });

  console.log(titulo1);

  console.log("Cerramos navegador...");
  browser.close();
  console.log("Navegador cerrado");
})();
