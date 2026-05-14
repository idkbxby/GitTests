const prompt = require("prompt-sync")();

let edad = parseInt(prompt("¿Cuál es tu edad? "));

if (edad >= 18 && edad <= 100){
  console.log("Es mayor de edad");
  edadProxima = edad + 1
  console.log("El próximo año tendrá", edadProxima)
} else if(edad >=12 && edad <= 17){
    console.log("Es adolescente")
} else if(edad>0 && edad <= 11){
    console.log("Es un niño")
} else {
    console.log("Agrega una edad válida")
}
