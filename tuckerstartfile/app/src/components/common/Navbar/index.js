import React from "react";
import Navbar from "./Navbar";
import AuthNavbar from "./AuthNavbar";
import { connect } from "react-redux";
import { changeModal, closeModal } from "../../../state/modal/actions";
import { updateAuth } from "../../../state/auth/actions";

function NavbarController(props) {
  if (!props.authenticated) {
    return <Navbar {...props} />;
  } else {
    return <AuthNavbar {...props} />;
  }
}

const mapStateToProps = state => ({
  authenticated: state.auth.authenticated,
  user: state.auth.user
});

const mapDispatchToProps = dispatch => ({
  loginModal() {
    dispatch(changeModal("LoginModal"));
  },
  signUpModal() {
    dispatch(changeModal("SignUpModal"));
  },
  signOut() {
    dispatch(updateAuth({}));
    dispatch(closeModal());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavbarController);
