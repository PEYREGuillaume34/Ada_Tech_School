async function fetchOffers(){
    const response = await fetch('https://www.codepassport.dev/api/offers'); // on appelle fetch avec une URL d'API
    console.log(response); // affiche la promesse retournée par fetch

    const data = await response.json(); // <-- maintenant tu obtiens le JSON
    console.log(data); // pour vérifier ce que tu reçois

}

fetchOffers()