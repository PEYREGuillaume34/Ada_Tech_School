const pageTitle = document.querySelector('h1');
const subscribeButton = document.querySelector('#newsletter');

//par défaut, l'utilisateur n'a pas cliqué, donc userHasClicked = false
let userIsSubscrib = false

subscribeButton.addEventListener("click", () => {
    if (userIsSubscrib === true) {
        // l'utilisateur est déjà abonné
        subscribeButton.innerText = "Subscribe";
        // au clique,  on inverse la valeur
        userIsSubscrib = false
    } else {
        // l'utilisateur n'est pas abonné
        subscribeButton.innerText = "Unsubscribe";
        // au clique,  on inverse la valeur
        userIsSubscrib = true;
    }
});