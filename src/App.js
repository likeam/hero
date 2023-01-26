import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [hight, setHight] = useState(0);
  const [superPower, setSuperPower] = useState("");

  


  return (
    <div className="App">
      <h1>welcom from App</h1>
      <label >Nanme</label>
      <input type="text" 
      onChange={(event) =>{setName(event.target.value)}} />
      <label htmlFor="">age</label>
      <input type="number" />
      <label htmlFor="">Hight</label>
      <input type="number" />
      <label htmlFor="">Power</label>
      <input type="text" />

      <button onClick={() => setName('Rehman')}>Change Name: {name}</button>
    </div>
  );
}

export default App;
