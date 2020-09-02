import Axios from "./axios";
import axios from "./axios";

axios // get article summary
  .get("/blog/articles")
  .then((response) => console.log(response.data.data))
  .catch((error) => console.log(error));

axios //post new article
  .post("/blog/articles", {
    title: "Axios is Boss",
    content: "It is so great, what fun, wowee!",
    tags: ["fun", "axios", "boss"],
  })
  .then(
    (response) =>
      axios
        .get(`/blog/articles/${response.data.data.id}`) //fetch article using response id
        .then((response) => console.log(response.data.data)) // log article
  );
