 let formulaire = document.getElementById("formulaire");
console.log(formulaire)


formulaire.addEventListener("submit", function(event) {
        event.preventDefault();
    let text = document.getElementById("citation").value;
    let author = document.getElementById("auteur").value;
    console.log(text,author)

    addQuote(text, author)
    document.getElementById("citation").value =""
    document.getElementById("auteur").value = ""
});


let compteurReference = 0


function addQuote(text,author){

compteurReference +=1
document.getElementById("compteur").innerText = compteurReference


let paraText = document.createElement('p');
paraText.classList.add('text')
paraText.innerText = text

let paraAuth = document.createElement('p');
paraAuth.classList.add('author')
paraAuth.innerText = author

const divQuote = document.createElement('div')
divQuote.classList.add('quote');
divQuote.appendChild(paraText)
divQuote.appendChild(paraAuth)
document.getElementById("quote-list").appendChild(divQuote)

}

