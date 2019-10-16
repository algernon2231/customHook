import React from "react";
import ReactDOM from "react-dom";
import CounterOne from './CounterOne'
import CounterTwo from './CounterTwo'
import "./styles.css";

function App() {
  return (
    <div className="App">
      <CounterOne />
      <CounterTwo />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
