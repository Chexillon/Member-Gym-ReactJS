import { Component } from "react";
import NavbarComponent from "./NavbarComponent";
import Index from './index';
import Home from './Home';
import { Switch, Route, Link } from "react-router-dom";
import Member from "./Member";
import Login from "./Login";

class App extends Component {
  render() {
    return (
      <div>
        <NavbarComponent />

        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/" component={Home} />
          <Route exact path="/index" component={Index} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/member" component={Member} />

        </Switch>
      </div>
    );
  }

}

export default App;
