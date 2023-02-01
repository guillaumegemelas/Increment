import "./App.css";

import logo from "../src/img/calc.png";
import Increment from "./components/Increment";
import Decrement from "./components/Decrement";

function App() {
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
          <Increment />

          <button
            onClick={() => {
              console.log("j'ai cliqué chef!");
            }}
          >
            counter
          </button>

          <Decrement />
        </div>
      </main>
    </div>
  );
}

export default App;
