import { useState } from 'react'
import './App.css'

// Input

// function App() {
//   const [input, setInput] = useState("")

//   return (
//     <div>
//       <input
//         type="text"
//         onChange={(e) => setInput(e.target.value)}

//       />
//       <p>{input}</p>
//     </div>
//   )
// }

// export default App



//  Récupérer la valeur d'un input

function App() {
  const [input, setInput] = useState("")
  const [items, setItems] = useState([])

  const handleAdd = () => {
    if (input.trim() === "") return; // ignore si vide
    setItems([...items, input]); // ajoute l’input à la liste
    setInput(""); // réinitialise le champ
  };

 
  const handleDelete = (index) => {
    // on crée un nouveau tableau sans l'élément à cet index
    const newItems = items.filter((_, i) => i !== index);
    // on met à jour la liste
    setItems(newItems);
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <p>{input}</p>
      {console.log("inpu",input)}
      <button onClick={handleAdd}>Ajouter</button>

      <ul>
        {items.map((item, index) => {
          return(
            <div>
          <input
          type="checkbox" />
          <li key={index}>{item}
          <button onClick={() => handleDelete(index)}>❌</button></li>
          </div>
)})}
      </ul>
    </div>
  );

}

export default App;



// Correction Charles


// import { useState } from 'react';
// import './App.css';
// import { List } from './components/List';

// export default function App() {
//   const [value, setValue] = useState([])

//   return (
//     <List value={value} setValue={setValue} />
//   )
// }

