import axios from "axios";

//This exports our api call so that TableContainer can use it
export default {
    searchName: function() {
        return axios.get("https://randomuser.me/api/?results=200&nat=us");
    }
}