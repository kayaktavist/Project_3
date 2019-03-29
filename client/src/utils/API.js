import Axios from "axios";

export default {
  signIn(email, password){
    return Axios.post("/api/signin", {email, password});
  },
  signUp(email, password){
    return Axios.post("/api/", {email, password});

  },
  getAllCharities: function() {
    return Axios.get("/api/");
  },
}

  // Gets all books
  // Gets the book with the given id
  // getCampaign: function(id) {
  //   return axios.get("/api/campaigns/" + id);
  // },
  // // Deletes the book with the given id
  // deleteCampaign: function(id) {
  //   return axios.delete("/api/campaigns/" + id);
  // },
  // // Saves a book to the database
  // saveCampaign: function(bookData) {
  //   return axios.post("/api/campaigns", bookData);
  // }

