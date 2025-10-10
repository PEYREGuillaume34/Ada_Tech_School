const boutonRed = document.getElementById("rouge")
const boutonGreen = document.getElementById("vert")
const boutonBlue= document.getElementById("bleu")

const carre = document.querySelector("#carre")

boutonRed.addEventListener("click", () => {
    carre.style.backgroundColor = "red"
})

boutonGreen.addEventListener("click", () => {
    carre.style.backgroundColor = "green"
})

boutonBlue.addEventListener("click", () => {
    carre.style.backgroundColor = "blue"
})

console.log (boutonRed)