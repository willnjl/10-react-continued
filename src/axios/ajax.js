import Axios from "./axios";
import axios from "./axios";

axios
  .get("/blog/articles")
  .then((response) => console.log(response.data.data))
  .catch((error) => console.log(error));
