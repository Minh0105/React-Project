import logo from "./logo.svg";
import "./App.scss";
import Nav from "./view/Nav";
import { useState } from "react";
//template + logic
//JSX
//babel
const App = () => {
  let [name, setName] = useState("Min"); // let [a,b] = [1,2] => a=1 b=2
  let [address, setAddress] = useState("");
  const handleEventClick = () => {
    setName(address);
  };
  const handleOnChangeInput = (event) => {
    setAddress(event.target.value);
  };
  //jsx có thể in ra giá trị trong 1 obj và k thể in cả obj ra html
  //re-render
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello World {name}</p>
        <input
          type="text"
          value={address}
          onChange={(event) => handleOnChangeInput(event)}
        ></input>
        <button type="button" onClick={() => handleEventClick()}>
          click me
        </button>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
