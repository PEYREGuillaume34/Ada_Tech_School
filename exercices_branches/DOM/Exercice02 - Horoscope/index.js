// Déclaration d'un tableau `horoscope` contenant des objets représentant chaque signe astrologique
// Chaque objet possède un `sign` (nom du signe) et une `description` humoristique liée au développement
const horoscope = [
  {
    sign: 'Bélier',
    description: "Cette développeuse·eur est toujours prête à débugger avec le casque de la bravoure, même si cela signifie se lancer tête la première dans un tas d'erreurs de syntaxe.",
  },
  {
    sign: 'Taureau',
    description: "Aussi obstiné·e qu'un bug qui ne veut pas être résolu, cette développeuse·eur ne s'arrêtera pas avant que son code soit aussi solide qu'un mur de pierre.",
  },
  {
    sign: 'Gémeaux',
    description: "Capable de parler Java et Python en même temps, cette développeuse·eur est aussi adaptable qu'un caméléon dans une boîte de crayons de couleur.",
  },
  {
    sign: 'Cancer',
    description: 'La personne développeuse qui protège son code comme une maman lionne avec ses petits. Elle vous donnera un coup de patte si vous touchez à sa précieuse base de données.',
  }
];

// On sélectionne l'élément du DOM avec l'ID "astro" pour y injecter dynamiquement le contenu
const contenu = document.getElementById("astro")

// Boucle à travers chaque élément du tableau `horoscope`
for (const item of horoscope) {
  // Création d'un élément <h2> pour le nom du signe astrologique
  const titre = document.createElement("h2");
  titre.textContent = item.sign; // On y insère le nom du signe

  // Création d'un élément <p> pour la description
  const texte = document.createElement("p");
  texte.textContent = item.description; // On y insère le texte humoristique

  // Ajout des éléments <h2> et <p> dans le <div id="astro"> du DOM
  contenu.appendChild(titre);
  contenu.appendChild(texte);
}




// Remarque :

// Pour une amélioration future, tu pourrais envisager de structurer chaque bloc avec un div parent, pour styliser chaque signe plus facilement via CSS.

// Tu veux que je t’aide à ajouter du style ou que je t’écrive une version avec gestion d’événements (par exemple : afficher le signe sélectionné par l’utilisateur) ?