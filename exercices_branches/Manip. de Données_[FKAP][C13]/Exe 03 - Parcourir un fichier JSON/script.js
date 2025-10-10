const data=require('./data.json')


// const fs = require('fs');
// const filepath = 'data.json';

// const content = fs.readFileSync(filepath, {encoding: 'utf8', flag: 'r'});
// const data = JSON.parse(content);
// // write your code bellow

console.log(typeof data);           // devrait afficher "object"
console.log(Array.isArray(data));   // devrait afficher true


//// Affiche dans la console, le premier objet du tableau d’objets
console.log(data[0]);

////Affiche dans la console, le nombre d’objects contenu dans le tableau
console.log(data.length)

// //Affiche dans la console, les informations de la candidate arrivée au 4e rang

for (const item of data) {
  if (item.ranking === 4) {
    console.log(item);
  }
}


// //// Affiche dans la console, l’âge moyen des candidates

let addAges = 0

for (const item of data) {
  addAges += item.age
    }
  console.log(addAges)


  let result = addAges/data.length
  console.log(result)


  

//Corrections Laila

const fs = require('fs');
const filepath = 'data.json';

const content = fs.readFileSync(filepath, {encoding: 'utf8', flag: 'r'});
const data = JSON.parse(content);

// write your code bellow


// 1 - Affichage du type de la données
const nom = "Laïla"
console.log("Etape 1: " + typeof (nom));

// 2. Affichage du 1er objet du tableau
console.log(data[0]);

// 3. Stocker le nombre de personnes
const nbPersons = data.length;
console.log("Il y a " + nbPersons + " personnes");

// 4. Candidate arrivée au 4e rang
const candidateNumberFour = data.filter(item => (item.ranking === 4));  
console.log("Candidate #4 est " , candidateNumberFour);

// 5. Âge moyen des candidates

let sommeAges = 0;
for (const item of data){
    sommeAges = sommeAges + item.age;
    // sommeAges += item.age;
}
const moyenne = sommeAges/nbPersons;
console.log("La moyenne d'âges est ", moyenne);