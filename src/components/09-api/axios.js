import axios from "axios";

export default axios.create({
  baseURL: "https://restful.training/api/",
  headers: {
    Accept: "application/json",
    Authorization:
      "Bearer 7r9N5MoM0IeskwEXUlleOybMz73sWzhLn58Ftk52WeSZSlZa7wPJBDcUXv3Gsb1eSJlVQOcY2qY4hk7z",
  },
});
