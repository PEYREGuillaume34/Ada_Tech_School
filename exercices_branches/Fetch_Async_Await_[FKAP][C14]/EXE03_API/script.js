//   function affichCharge() {
//   const conteneur = document.getElementById("chargeDebut");
//   const chargement = document.createElement("p");
//   chargement.innerText = "Chargement des offres…";
//   conteneur.appendChild(chargement);
// }

// affichCharge();


async function dummyOffers(){
    const response = await fetch ('https:www.dummyjson.com/posts');
    console.log(response);

    const data = await response.json();
    console.log(data);


//     const offres = document.getElementById("offers-container")
//     for (let i = 0; i < data.length; i++) {
//     let titre = document.createElement("h2");
//     let description = document.createElement("p");

//     titre.innerHTML = data[i].titre;
//     description.innerHTML = data[i].description;

//     offres.appendChild(titre);
//     offres.appendChild(description);
// }
// document.getElementById("chargeDebut").style.display = "none";
// document.getElementById("chargeDebut").innerHTML = "";

}

dummyOffers()