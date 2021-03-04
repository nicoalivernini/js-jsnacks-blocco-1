// Primo numero
var numeroUno = parseInt(prompt("Inserisci il primo numero:"));

// Secondo numero
var numeroDue = parseInt(prompt("Inserisci il secondo numero:"));

if (numeroUno > numeroDue) {
  document.getElementById('risultato').innerHTML = numeroUno
} else {
  document.getElementById('risultato').innerHTML = numeroDue
}
