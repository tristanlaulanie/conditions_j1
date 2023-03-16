// Vérifier si un nombre est positif ou négatif.
// NB: On souhaite une déclaration de variable, et une condition if. Il y a 3 possibilités.

let randomNumber = Math.floor(Math.random() * 2001) - 1000;
alert(randomNumber + " est le nombre choisi.");
console.log(randomNumber);

if (randomNumber >= 0) {
  alert(" ➕ Le nombre est positif.");
} else {
  alert(" ➖ Le nombre est négatif.");
}

// Vérifier si un nombre est pair ou impair.
// NB: variable; if.

let randomNumberCheck = randomNumber % 2;

if (randomNumberCheck == 0) {
  alert("Le nombre est pair.");
} else {
  alert("Le nombre est impair.");
}

// Vérifier si une personne est majeure ou non.
// NB: if; variable.

let testAge = prompt("Entrez votre age");

if (testAge >= 18) {
  alert("💪 Vous êtes majeur.");
} else {
  alert("👶Vous êtes mineur.");
}

// Vérifier si une personne peut voter.
// NB: Fr, +18, inscrit.

let natio = prompt("🍷Etes vous français : oui / non ?");
let age = prompt("Quel est votre âge ?");
let estInscrit = prompt(
  "Etes vous inscrit sur les listes éléctorales : oui / non ?"
);

console.log(natio);
console.log(age);
console.log(estInscrit);

if (natio === "oui" && age >= 18 && estInscrit === "oui") {
  alert("🤠 Vous pouvez voter.");
} else {
  alert("😣 Vous ne pouvez pas voter.");
}

// Vérifier si une personne a le droit de conduire.
// NB: age, permis.

let ageAsk = prompt("Quel âge avez vous ?");
let permisAsk = prompt("Avez vous le permis : oui / non");

if (ageAsk >= 18 && permisAsk === "oui") {
  alert("🚘 Vous pouvez conduire.");
} else {
  alert("😅 Rentres Avec Tes Pieds.");
}

// Vérifier si une personne a le droit à une réduction.
// NB: age, estEtudiant.
