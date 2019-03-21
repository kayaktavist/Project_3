import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./state";

// Common Components
import Navbar from "./components/common/Navbar";
import ModalController from "./components/modals";

// Pages
import Home from "./components/pages/Home";
import Post from "./components/pages/Post";
import AuthRoute from "./utils/AuthRoute";
import ReactExamples from "./components/pages/ReactExamples";
import Footer from "./components/common/Footer";


function App(props) {
  return (
    <Provider store={store}>
        <Router>
          <div>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/documentation" component={AuthRoute(Post)} />
              <Route path="/react-examples" component={ReactExamples} />
            </Switch>
            <Footer/>
            <ModalController />
          </div>
        </Router>
    </Provider>
  );
}

export default App;
