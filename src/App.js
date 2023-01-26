import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [hight, setHight] = useState(0);
  const [superPower, setSuperPower] = useState("");
  const [displayChrarcter, setDisplayCharcter] = useState(false);

  


  return (
    <div className="App">
      <h1>Build A Hero</h1>
      <div>
        <label >Nanme</label>
        <input type="text" 
        onChange={(event) =>{setName(event.target.value)}} />
        <br />
        <label htmlFor="">Age</label>
        <input type="number" 
        onChange={(event) =>{setAge(event.target.value)}} />
        <br />
        <label htmlFor="">Hight</label>
        <input type="number" 
        onChange={(event) =>{setHight(event.target.value)}} />
        <br />
        <label htmlFor="">Power</label>
        <input type="text" onChange={(event) =>{setSuperPower(event.target.value)}} /> 
      </div>
      <br />
      <br />
      <button 
      onClick={() => {setDisplayCharcter(true)}}>Display Character</button>
      <div>
        <h1>Hero Info</h1>
        {displayChrarcter && (
          <ul>
            <li>{name}</li>
            <li>{age}</li>
            <li>{hight}</li>
            <li>{superPower}</li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
