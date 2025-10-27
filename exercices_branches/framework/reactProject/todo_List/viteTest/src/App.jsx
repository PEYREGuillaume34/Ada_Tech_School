import { useState } from 'react'
import './App.css'
import { Button } from './components/Button'



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
  console.log("input", input);

  
  return (
    <div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <p>{input}</p>
      <Button onClick={handleAdd}>Ajouter ✅</Button>

      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <input type="checkbox" />
            {item}
            <Button onClick={() => handleDelete(index)}>❌</Button>
          </li>
        ))}
      </ul>

    </div>
  );

}

export default App;



