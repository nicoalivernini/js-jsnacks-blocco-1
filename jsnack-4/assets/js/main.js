// Creo array con nomi invitati alla festa
var nomeInvitati = ["Giuseppe", "Andrea", "Nicolò", "Paolo", "Francesca"];

// Inserimento nome da parte dell'utente
var nomeUtente = prompt("Inserisci il tuo nome:");

//Variabile di controllo
var controlloNome = false;

for (var i = 0; i < nomeInvitati.length; i++) {
  // Controllo presenza del nome
  if (nomeUtente == nomeInvitati [i]) {
    controlloNome = true;
  }
}

// Controllo la variabile di controllo
if (controlloNome == true) {
  document.getElementById('responso').innerHTML = "Il tuo nome è presente nella lista"
} else {
  document.getElementById('responso').innerHTML = "Il tuo nome non è presente nella lista"
}
