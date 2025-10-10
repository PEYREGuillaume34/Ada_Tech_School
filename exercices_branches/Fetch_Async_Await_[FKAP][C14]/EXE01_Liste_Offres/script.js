  function affichCharge() {
  const conteneur = document.getElementById("chargeDebut");
  const chargement = document.createElement("p");
  chargement.innerText = "Chargement des offres…";
  conteneur.appendChild(chargement);
}

affichCharge();


async function fetchOffers(){
    const response = await fetch('https://www.codepassport.dev/api/offers'); // on appelle fetch avec une URL d'API
    console.log(response); // affiche la promesse retournée par fetch

    const data = await response.json(); // <-- maintenant tu obtiens le JSON
    console.log(data); // pour vérifier ce que tu reçois

    const offres = document.getElementById("offers-container")
    for (let i = 0; i < data.length; i++) {
    let titre = document.createElement("h2");
    let description = document.createElement("p");

    titre.innerHTML = data[i].titre;
    description.innerHTML = data[i].description;

    offres.appendChild(titre);
    offres.appendChild(description);
}
// document.getElementById("chargeDebut").style.display = "none";
document.getElementById("chargeDebut").innerHTML = "";

}

fetchOffers()

