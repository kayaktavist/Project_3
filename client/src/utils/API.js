import Axios from "axios";

export default {
  signIn(email, password){
    return Axios.post("/api/signin", {email, password});
  },
  signUp(email, password){
    return Axios.post("/api/", {email, password});

  }
}

