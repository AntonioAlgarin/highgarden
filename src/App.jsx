// import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Rating from "./components/Rating";

function App() {
  return (
    <React.Fragment>
      <h1>Welcome to Highgarden</h1>
      <h2>This is where I will add plants</h2>
      <h3>Click here to view more</h3>
      <Rating></Rating>
    </React.Fragment>
  );
}

export default App;
