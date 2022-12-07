import logo from "./logo.svg";
import "./App.scss";
import Nav from "./view/Nav";
import { useState, useEffect } from "react";
import Covid from "./view/Covid";
import { CountDown, NewCountDown } from "./view/Countdown";
import ToDo from "./view/ToDo";

import {
  Router,
  BrowserRouter,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";

//template + logic
//JSX
//babel
const App = () => {
  let [name, setName] = useState("Min"); // let [a,b] = [1,2] => a=1 b=2
  let [address, setAddress] = useState("");
  let [todos, setToDos] = useState([
    {
      id: "todo1",
      title: "MinMin",
      type: "Min",
    },
    {
      id: "todo2",
      title: "MinMin2",
      type: "MinMin2",
    },
  ]);
  //didmount
  useEffect(() => {
    console.log("Use effect run");
  }, []);
  //didupdate
  useEffect(() => {
    console.log("Use effect run todos");
  }, [address]); //onlu re-run effect if the address changes;
  const handleEventClick = () => {
    if (address === "") {
      window.alert("Fill the blank");
    } else {
      let newTodo = {
        id: Math.floor(Math.random() * 1000 + 1),
        title: address,
        type: "Min",
      };
      //...spread syntax array js
      setToDos([...todos, newTodo]);
      //Hook not merge state khi cập nhật giá trị sẽ mất các state cũ nếu ko thông báo trước
    }
  };
  const handleDeleteEvent = (id) => {
    let currentTodos = todos.filter((item) => item.id !== id);
    setToDos(currentTodos);
  };
  const handleOnChangeInput = (event) => {
    setAddress(event.target.value);
  };
  const onTimeUp = () => {
    alert("times up");
  };
  //jsx có thể in ra giá trị trong 1 obj và k thể in cả obj ra html
  //re-render
  //for for-each => map
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <CountDown onTimeUp={onTimeUp}></CountDown>
          <NewCountDown></NewCountDown>
          <p>Hello World {name}</p>
          <Switch>
            <Route exact path="/">
              <Covid />
            </Route>
            <Route path="/users">{/* <Users /> */}</Route>
          </Switch>
          {/* <Covid /> */}
          {/* <ToDo
          todos={todos}
          title="All Todos"
          handleDeleteEvent={handleDeleteEvent}
        />

        <ToDo
          todos={todos.filter((item) => item.type === "Min")}
          title="Min's Todos"
          handleDeleteEvent={handleDeleteEvent}
        />
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
        </a> */}
        </header>
      </BrowserRouter>
    </div>
  );
};

export default App;
