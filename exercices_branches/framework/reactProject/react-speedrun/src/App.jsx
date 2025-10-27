import { useState } from 'react'
import './App.css'


// EXERCICE 01

// export const App = () => {
//   const [value, setValue] = useState("N'as pas de sens 😑")

//   const handleClick = () => {setValue("A du sens 😊");
//   }

//   return (
//     <button onClick = {handleClick}>{value}</button>
//   )
// }

// export default App;


// EXERCICE 02

export const App = () => {
  const [value, setValue] = useState("N'as pas de sens 😑")

  const handleClick = () => {
    setValue("A du sens 😊");
  }

  const numbers = ["Sens1", "Sens2", "Sens3"];
  const listItems = numbers.map((number) =>
    <li>{number}</li>)

  
  return (
    <div key={id}>
      <button onClick={handleClick}>{value}</button>
      <ul>{listItems}</ul>
    </div>
  )

}

export default App;



