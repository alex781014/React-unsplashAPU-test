import axios from "axios";

export default axios.create({
  baseURL:'https://api.unsplash.com/',
  headers: {
    Authorization: "Client-ID KVsLqf2zQBal-mfhLp1UgCvMirpvxr28OAE4n38Foyw",
  },
});
