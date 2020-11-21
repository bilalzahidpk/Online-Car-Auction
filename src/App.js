import React from "react";
import Navigation from "./components/UI/Navigation/Navigation";
import Header from "./components/UI/Header/Header";
import { Container } from "react-bootstrap";
function App() {
  return (
    <div className="App">
      <div>
      <Header/>
      <Navigation/>
      </div>
    </div>
  );
}

export default App;
