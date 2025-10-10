// const bouton = document.getElementById("buttonAC")
// const texte = document.getElementById("monParagraphe")

// // Ajouter un événement au clic du bouton
// bouton.addEventListener("click",() =>{
//   // Vérifie l'affichage actuel du paragraphe
//   if (getComputedStyle(texte).display === "none") {
//     texte.style.display = "block"; // Affiche le paragraphe
 
// } else {
//     texte.style.display = "none"; // Cache le paragraphe
//   }
// });




// METHODE FLORIAN
// const addButton = document.getElementById('add');
// const removeButton = document.getElementById('remove');
// const resetButton = document.getElementById('reset');
// const variableAfficher = document.querySelector("p");

// let compteur = 0

// addButton.addEventListener("click", () => {
//     compteur = compteur + 1
//     variableAfficher.innerText = compteur
// })

// removeButton.addEventListener("click", () => {
//     compteur = compteur - 1
//     variableAfficher.innerText = compteur
// })

// resetButton.addEventListener("click", () => {
//     compteur = 0
//     variableAfficher.innerText = compteur
// })




// METHODE ABDEL

const button = document.getElementById("buttonAC")
const paragraph = document.getElementById("monParagraphe")
console.log(button)
console.log(paragraph)


let userHasClicked = false

button.addEventListener("click", () => {
    if(userHasClicked === true){  
        userHasClicked = false
    paragraph.style.display = "none"
    }else{
        userHasClicked = true
        paragraph.style.display = "block"
    }
})