import React, { Component } from "react";
import NavbarComponent from "./crud/NavbarComponent";
import { BrowserRouter as Router, Route, Switch, Link } from "react";
import Home from "./crud/Home";
import Login from "./crud/Login";

class App extends Component {
  render(){
  return (
      <div>
        <h2>Hello World</h2>
        <NavbarComponent />
      </div>
  
  );
}
}

export default App;
