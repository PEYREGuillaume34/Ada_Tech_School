import { useState } from 'react'
import { Button } from './Button'

//EXERCICE 01

// export const SeeName = () => {
//   return <h1>Hello</h1>;
// };


// EXERCICE 02

// export const SeeName = () => {
//   const [name, setName] = useState("Thomas");

//   return (
//     <div>
//       <h1>Hello {name}</h1>
//     </div>
//   );
// };


// EXERCICE 03

// export const SeeName = () => {
//   const names = ["Thomas", "Tristan", "Lionnel"];

//   return (
//     <div>
//       {names.map((name, index) => (
//         <h1 key={index}>Hello {name}</h1>
//       ))}
//     </div>
//   );
// };

// // EXERCICE 04

// export const SeeName = () => {
//   const names = ["Thomas", "Tristan", "Lionnel"];

//   return (
//     <div>
//       {names.map((name, index) => (
//         <div key={index}>
//           <h1>Hello {name}</h1>
//           <button>x</button>
//         </div>

//       ))}

//     </div>
//   );
// };


// EXERCICE 05

// export const SeeName = () => {
//   const names = ["Thomas", "Tristan", "Lionnel"];

//   const handleDelete = () => {
//     console.log("remove");
//   };

//   return (
//     <div>
//       {names.map((name, index) => (
//         <div key={index}>
//           <h1>Hello {name}</h1>
//           <button onClick={handleDelete}>❌</button>
//         </div>
//       ))}
//     </div>
//   );
// };


// EXERCICE 06

// export const SeeName = () => {

//   const names = ["Thomas", "Tristan", "Lionnel"];

//   const handleDelete = (index) => {
//     console.log(index);
//   }

//   return (
//     <div>
//       {names.map((name, index) => (
//         <div key={index}>
//           <h1>Hello {name}</h1>
//           <button onClick={() => handleDelete(index)}>❌</button>
//         </div>
//       ))};

//     </div>
//   );
// };


// EXERCICE 07

// export const SeeName = () => {

//   const [names, setNames] = useState(["Thomas", "Tristan", "Lionnel"]);

//   const handleDelete = (indexToRemove) => {
//     setNames(names.filter((_, index) => index !== indexToRemove));
//     console.log(indexToRemove);
//   }

//   return (
//     <div>
//       {names.map((name, index) => (
//         <div key={index}>
//           <h1>Hello {name}</h1>
//           <button onClick={() => handleDelete(index)}>❌</button>
//         </div>
//       ))};

//     </div>
//   );
// };


// EXERCICE 8

// // il faut identifier l'élément à supprimer par une valeur stable et unique,
// // comme le nom lui-même, plutôt que par son index dans le tableau.


// export const SeeName = () => {

//   const [names, setNames] = useState(["Thomas", "Tristan", "Lionnel"]);

//   // 1. La fonction prend maintenant le 'nameToRemove' (la chaîne de caractères)
//   const handleDelete = (nameToRemove) => {
//     console.log("Nom à supprimer :", nameToRemove);
//   // 2. On filtre le tableau en gardant uniquement les noms qui NE SONT PAS le nom à supprimer.
//   setNames(names.filter(name => name !== nameToRemove));

//   }


//   return (
// <div>
//       {names.map((name) => (
//         // 3. ON UTILISE LE NOM COMME CLÉ !
//         //    Puisque chaque nom est unique dans ce scénario, React peut le suivre correctement.
//         <div key={name}> 
//           <h1>Hello {name}</h1>
//           {/* 4. On passe le 'name' à la fonction de suppression au lieu de l'index. */}
//           <Button onClick={() => handleDelete(name)}/>
//         </div>
//       ))};

//     </div>
//   );
// };


// EXERCICE 09

export const SeeName = () => {

  const [inputValue, setInputValue] = useState('')
  const [names, setNames] = useState(["Thomas", "Tristan", "Lionnel"])


  const handleDelete = (nameToRemove) => {
    console.log("Nom supprimé :", nameToRemove)
    setNames(names.filter(name => name !== nameToRemove))
  }

  const handleAddName = () => {
    // Vérifie que la chaîne n'est pas vide ou seulement des espaces
    if (inputValue === "") return

    // Ajout du nouveau nom au tableau existant (immutabilité)
    setNames([...names, inputValue]) 
    setInputValue(""); // Réinitialise l'input
    
    console.log(`Nom ajouté: ${inputValue}`); // Log d'information
  }

  return (
    <div>
      <input type="text"
        placeholder="Entrez un nom..."
        value={inputValue} // L'état contrôle la valeur (Ex 10)
        onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleAddName()
            }
          }}
        />

      <Button onClick={handleAddName}>Ajouter</Button>

      {names.map((name) => (
        <div key={name}>
          <h1>Hello {name}</h1>
          <Button onClick={() => handleDelete(name)}>❌</Button>
        </div>
      ))}

    </div>
  )
}