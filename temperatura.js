const rLine = require("readLine-sync");

const temperatura = rLine.question('Infome a temperatura? ');

let celsius = temperatura;
let fahrenheit = ((9*temperatura) /5 + 32);
console.log(`Temperatura em Farenheit ${fahrenheit}`);
