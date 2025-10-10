const bouton = document.getElementById("counter")


const nombreClics = document.getElementById("counter")

let count = 0

nombreClics.addEventListener("click", () => {
    count +=1
    nombreClics.innerText = count + " clics !";

})