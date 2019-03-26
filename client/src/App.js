import React, { Component } from "react";
import "./App.css";
import 'bulma/css/bulma.css';
import "../node_modules/bloomer/"
import Home from "./components/pages/Home"
import noMatch from "./components/pages/404page/noMatch"
import Discover from "./components/pages/Discover"


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import {

  Nav,
  NavLeft,
  NavRight,
  NavCenter,
  NavItem,
  HeroHeader

} from 'bloomer';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Router>
          <div>
            <Nav>
              <NavLeft>
                <NavItem href="/" isBrand>HOME </NavItem>

                <NavItem href="/discover" isBrand>DISCOVER</NavItem>
              </NavLeft>
              <NavCenter>
                <NavItem href="/" isBrand>HOME </NavItem>

                <NavItem href="/discover" isBrand>DISCOVER</NavItem>
              </NavCenter>
              <NavRight>
                <NavItem href="/" isBrand>HOME </NavItem>

                <NavItem href="/discover" isBrand>DISCOVER</NavItem>
              </NavRight>
            </Nav>

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/discover" component={Discover} />
              <Route component={noMatch} />
              {/* <Route path="/react-examples" component={ReactExamples} /> */}
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
