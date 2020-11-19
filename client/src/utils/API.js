import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=200&nat=us"
//This exports our api call so that TableContainer can use it
export default {
    searchName: function() {
        return axios.get(BASEURL);
    }
}

// Export an object containing methods we'll use for accessing the random user API
// export default {
//     fetchUsers: function() {
//       return axios
//         .get("https://api.github.com/orgs/github/public_members")
//         .then(res => {
//           const users = res.data;
//           return users.map(user => {
//             return {
//               login: user.login,
//               image: user.avatar_url,
//               profileUrl: user.html_url
//             };
//           });
//         });
//     }
//   };