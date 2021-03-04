// Prima parola
var primaParola = prompt("Inserisci la prima parola:").trim();

//Seconda parola
var secondaParola = prompt("Inserisci la seconda parola").trim();

// Condizione

if (primaParola.length > secondaParola.length) {
  document.getElementById('parola-1').innerHTML = secondaParola + " " + primaParola
} else {
  document.getElementById('parola-2').innerHTML = primaParola + " " + secondaParola
}
