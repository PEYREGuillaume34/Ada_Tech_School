import { useState } from 'react'
import './App.css'

// //Exercice 01

// export default function App() {
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


//Exercice 02
export default function App() {
const [input, setInput] = useState("")
  const [items, setItems] = useState([])



  return (
    <div>
      <input
        type="submit"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <p>{input}</p>
      {console.log("inpu",input)}

      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );

}