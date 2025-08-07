const readline = require('readline');

// Número aleatorio entre 1 y 100 en donde la idea es que le jugador intente adivinar el numero con pistas de frio y caliente
// No se que mas poner para los cambios pero esta curioso la verdad :D
const numeroSecreto = Math.floor(Math.random() * 100) + 1;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("🎯 ¡Bienvenido al juego de adivinar el número!");
console.log("Adivina un número entre 1 y 100. Escribe tu intento:");

let intentos = 0;

function pedirIntento() {
  rl.question("👉 Tu número: ", (respuesta) => {
    const intento = parseInt(respuesta);
    intentos++;

    if (isNaN(intento)) {
      console.log("🚫 Eso no es un número válido.");
    } else if (intento === numeroSecreto) {
      console.log(`🎉 ¡Felicidades! Adivinaste el número ${numeroSecreto} en ${intentos} intentos.`);
      rl.close();
      return;
    } else {
      const diferencia = Math.abs(numeroSecreto - intento);
      if (diferencia <=10) {
        console.log("🔥 ¡Muy caliente!");
      } else if (diferencia <= 15) {
        console.log("🌡️ Caliente");
      } else if (diferencia <= 25) {
        console.log("❄️ Frío");
      } else {
        console.log("🧊 Muy frío");
      }
    }

    pedirIntento();
  });
}

pedirIntento();
