import { useState } from "react";
import "./App.css";
import { ProgressBar } from "./components/progressBar";
import { List } from "./components/List";

function App() {
  // const tu déclares ta constante
  // value c'est ta valeur
  // setValue c'est elle qui va mettre a jour ta value
  // exemple si value = "charles" => setValue("charl") => value = "charl"
  // useState c'est ce qui permet de faire tourner tout ça
  // ce qu'on rentre à l'intérieur c'est ce qu'on va manipuler
  const [value, setValue] = useState([]);
  // function
  const addList = (event) => {
    event.preventDefault();
    const input = [...value];
    input.push({ name: event.target[0].value, isDone: false });
    setValue(input);
    event.target.reset();
  };
  return (
    <div>
      <ProgressBar value={value} />
      {/* list parcouru */}
      <List value={value} setValue={setValue} />
      <form
        onSubmit={(event) => {
          addList(event);
        }}
      >
        <input />
      </form>
    </div>
  );
}

export default App;
