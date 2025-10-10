
function chooseNumber(){
    
    let number = Number(prompt("Donnes moi un nombre entre 0 et 10"));
        if (number >= 0 && number <= 10){
        for (let i = number; i>=0; i--){
            alert(i)
        };
        }
        else {
            alert("Erreur : tu dois entrer un nombre entre 0 et 10.");
        };
}

chooseNumber();