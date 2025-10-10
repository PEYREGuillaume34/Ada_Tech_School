function autorisation(prenom, age){
let ageLegal = 17

if (prenom,age>=ageLegal)
    return "Tu es autorisé à conduire";
else if (prenom,age<ageLegal)
    return "Tu n'es pas autorisé à conduire";
}

console.log (autorisation("Léa", 15));
console.log (autorisation("Mathieu", 22))
console.log (autorisation("Jean", 17));