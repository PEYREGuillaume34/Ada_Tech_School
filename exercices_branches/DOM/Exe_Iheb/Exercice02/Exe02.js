const boutonAjout = document.getElementById("Ajout")
const boutonSuppr = document.getElementById("Suppr")
const boutonReset = document.getElementById("Reset")

const nombre = document.querySelector("p")

let valeur = 0

boutonAjout.addEventListener("click", () => {
    valeur +=1
    nombre.innerText = valeur;})

boutonSuppr.addEventListener("click", () => {
       valeur -=1
       nombre.innerText = valeur;})

boutonReset.addEventListener("click", () => {
    valeur = 0
    nombre.innerText = valeur;})
