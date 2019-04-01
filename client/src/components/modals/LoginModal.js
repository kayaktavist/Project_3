import React, { useState } from "react";
import { connect } from "react-redux";
// import { signin } from "../../state/auth/actions";

import Modal from "./Modal";
import { Card, CardHeader, CardContent, CardHeaderTitle } from "bloomer";

import { createAction } from "redux-actions";
import API from "../../utils/API";
import { closeModal } from "../../state/modal/actions";


function LoginModal(props) {
  const [email, setEmail] = useState("hello@gmail.com");
  const [password, setPassword] = useState("pickles");

  return (
    <Modal>
      <Card>
        <CardHeader>
          <CardHeaderTitle>Login!</CardHeaderTitle>
        </CardHeader>
        <CardContent>
          
          <div className="field">
            <label className="label" htmlFor="email">
              Email
            </label>
            <input
              placeholder="burrito@taco.com"
              className="input"
              name="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              type="text"
            />
          </div>
          <div className="field">
            <label className="label" htmlFor="password">
              Password
            </label>
            <input
              placeholder="Secret Sauce"
              className="input"
              name="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              type="password"
            />
          </div>
          <div className="has-text-right">
            <button
              // onClick={() => props.dispatch(signin(email, password))}
              onClick={() => {
                API.signIn(email, password)
                  .then(res => {
                    const auth = { ...res.data };
                    auth.authenticated = true;
                    const updateAuth = createAction("UPDATE_AUTH");

                    props.dispatch(closeModal());
                    props.dispatch(updateAuth(auth));
                    console.log("dispatch")



                  })
              }}
              className="button is-primary"
            >
              Login
            </button>
          </div>
          
        </CardContent>
      </Card>
    </Modal>
  );
}

export default connect(
  null,
  null
)(LoginModal);
