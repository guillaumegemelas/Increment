import "./App.css";
import { useState } from "react";

import logo from "../src/img/calc.png";
import Increment from "./components/Increment";
import Decrement from "./components/Decrement";
import Reset from "./components/Reset";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <header>
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <p>React counter</p>
      </header>
      <main>
        {" "}
        <div className="col1">
          <Decrement counter={counter} setCounter={setCounter} />

          <button className="second">
            <span> {counter}</span>
          </button>

          <Increment counter={counter} setCounter={setCounter} />
        </div>
        <Reset counter={counter === 0} setCounter={setCounter} />
      </main>
      <footer> Mage by Guillaume at Le Reacteur</footer>
    </div>
  );
}

export default App;
