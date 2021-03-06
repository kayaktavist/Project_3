import React, { Component } from "react";
import "./App.css";
import 'bulma/css/bulma.css';
import "../node_modules/bloomer/"
import Home from "./components/pages/Home"
import noMatch from "./components/pages/404page/noMatch"
import Discover from "./components/pages/Discover"
import Navbar from "./components/pages/NavBar";
import Charity from "./components/pages/Charity";
import ModalController from "./components/modals";

import AuthRoute from "./utils/AuthRoute";
import { Provider } from "react-redux";
import store from "./state";


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
<Provider store={store}>
        <Router>
            <Navbar />

            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/discover" component={Discover} />
              {/* <Route exact path="/discover/charity" component={Charity} /> */}
              <Route component={noMatch} />
            </Switch>
            <ModalController />
        </Router>
        </Provider>
    );
  }
}

export default App;
