import axios from "axios";

export default {
  // Gets all books
  getCampaign: function() {
    return axios.get("/api/campaigns");
  },
  // Gets the book with the given id
  getCampaign: function(id) {
    return axios.get("/api/campaigns/" + id);
  },
  // Deletes the book with the given id
  deleteCampaign: function(id) {
    return axios.delete("/api/campaigns/" + id);
  },
  // Saves a book to the database
  saveCampaign: function(bookData) {
    return axios.post("/api/campaigns", bookData);
  }
};
