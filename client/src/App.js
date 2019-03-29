import React, { Component } from "react";
import "./App.css";
import 'bulma/css/bulma.css';
import "../node_modules/bloomer/"
import Home from "./components/pages/Home"
import noMatch from "./components/pages/404page/noMatch"
import Discover from "./components/pages/Discover"
import Navbar from "./components/pages/NavBar";
import Charity from "./components/pages/Charity";




import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">

        <Router>
          <div>
            <Navbar />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/discover" component={Discover} />
              {/* <Route exact path="/discover/charity" component={Charity} /> */}
              <Route component={noMatch} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
