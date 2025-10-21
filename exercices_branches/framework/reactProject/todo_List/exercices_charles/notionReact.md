# ⚛️ Notions de base en React

React est une **bibliothèque JavaScript** développée par **Facebook** pour créer des **interfaces utilisateurs dynamiques** et **réactives**.  
Elle permet de construire des applications web en **composants réutilisables**.

## 🚀 1. Qu’est-ce que React ?

React permet de :

- Créer des **interfaces dynamiques** (le contenu change sans recharger la page).
- Découper son code en **composants** réutilisables.
- Gérer les **données et états** facilement avec les **hooks**.
- Avoir une application **rapide et maintenable**.

## Structure de base d’un projet React

Quand tu crées un projet avec Vite ou Create React App, tu as généralement :

📁 mon-projet-react
┣ 📂 src
┃ ┣ 📜 App.jsx
┃ ┣ 📜 main.jsx
┃ ┗ 📂 components/
┣ 📜 index.html
┣ 📜 package.json
┗ 📜 vite.config.js

## Le premier composant : `App.jsx`

Un **composant** React est une **fonction** qui retourne du **JSX** (un mélange de HTML et JS).

```jsx
function App() {
  return <h1>Hello React 👋</h1>;
}

export default App;
```

**À retenir :**

- Chaque composant doit retourner **un seul élément parent**.
- Le nom du composant commence **toujours par une majuscule**.
- `export default` permet de l’utiliser ailleurs.

## Le point d’entrée : `main.jsx`

C’est ici que React **monte** ton application dans le DOM HTML.

```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

`document.getElementById('root')` fait référence à la balise `<div id="root"></div>` dans ton `index.html`.

## Le JSX

JSX est un **langage hybride** entre HTML et JavaScript.

```jsx
const name = "Alice";
return <h1>Hello {name}!</h1>;
```

🪄 Tu peux écrire des **expressions JS entre `{}`** :

- `{variable}`
- `{2 + 2}`
- `{condition ? "Oui" : "Non"}`

---

## Les props (propriétés)

Les **props** sont des **valeurs passées d’un composant parent à un composant enfant**.

```jsx
function Welcome(props) {
  return <h2>Hello {props.name}</h2>;
}

export default function App() {
  return <Welcome name="Alice" />;
}
```

Ici :

- `App` envoie la prop `name="Alice"`
- `Welcome` reçoit cette prop via `props.name`

💡 On peut aussi utiliser la **déstructuration** :

```jsx
function Welcome({ name }) {
  return <h2>Hello {name}</h2>;
}
```

---

## Le state (état) avec `useState`

Le **state** permet de gérer des données **qui changent dans le temps**.

```jsx
import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Compteur : {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
}
```

- `count` = valeur actuelle
- `setCount` = fonction pour modifier cette valeur
- `useState(0)` = valeur initiale

## Les événements (`onClick`, `onChange`, `onSubmit`…)

React gère les événements comme en JavaScript, mais avec **camelCase** (manière d'écrire Exemple : JeSuisTropFort)

```jsx
<button onClick={() => alert("Bonjour !")}>Clique-moi</button>
```

Formulaire :

```jsx
<form
  onSubmit={(e) => {
    e.preventDefault();
    console.log("Formulaire envoyé");
  }}
>
  <input type="text" />
  <button>Valider</button>
</form>
```

## Les listes et la méthode `.map()`

Pour afficher plusieurs éléments, on utilise la méthode `.map()`.

```jsx
const names = ["Alice", "Bob", "Charlie"];

return (
  <ul>
    {names.map((n, index) => (
      <li key={index}>{n}</li>
    ))}
  </ul>
);
```

⚠️ Chaque élément doit avoir une **clé unique** (`key={}`) pour aider React à suivre les changements.

## Exemple complet

```jsx
import { useState } from "react";

export default function App() {
  const [names, setNames] = useState(["Alice", "Bob"]);

  const addName = (e) => {
    e.preventDefault();
    const newNames = [...names];
    newNames.push(e.target.elements.newName.value);
    setNames(newNames);
    e.target.reset();
  };

  return (
    <>
      <form onSubmit={addName}>
        <input name="newName" placeholder="Ajouter un prénom" />
        <button>Ajouter</button>
      </form>
      <ul>
        {names.map((name, id) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </>
  );
}
```

## 📚 11. Les notions à connaître absolument

| Notion | Description |

| **Composant** => Une fonction qui retourne du JSX |
| **JSX** => Mélange de HTML et JS |
| **Props** => Données passées d’un composant parent à enfant |
| **State (`useState`)** => Donnée interne qui change |
| **Événements** => Interaction de l’utilisateur (` onClick``onChange `...) |
| **Listes** => Rendu dynamique d’éléments via `.map()` |
| **Clé (`key`)** => Identifiant unique pour chaque élément d’une liste |
| **Import / Export** => Permet de séparer le code dans plusieurs fichiers |
| **Hook** => Fonction spéciale de React (ex : `useState`, `useEffect`) |

## 💡 12. Bonnes pratiques

✅ Nommer les composants avec une majuscule
✅ Toujours retourner un seul élément parent
✅ Bien gérer les clés (`key`) dans les listes
✅ Ne jamais modifier le `state` directement (`useState` toujours)
✅ Utiliser des props pour faire communiquer les composants

## 🧭 13. Ressources utiles

- 📘 [Documentation officielle de React](https://react.dev/)
- 🧠 [React Cheatsheet (Devhints)](https://devhints.io/react)
- 🎮 [React Tutorial interactif](https://react.dev/learn)
