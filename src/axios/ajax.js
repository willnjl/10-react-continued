import axios from "./axios";

// delete article;
// axios.delete("/blog/articles/58").then(() => {
//   console.log("deleted");
// });

// axios // get article summary

//   .get("/blog/articles")
//   .then((response) => console.log(response.data.data))
//   .catch((error) => console.log(error));

// axios //post new article

//   .post("/blog/articles", {
//     title: "Axios is Boss",
//     content: "It is so great, what fun, wowee!",
//     tags: ["fun", "axios", "boss"],
//   })
//   .then(
//     (response) =>
//       axios
//         .get(`/blog/articles/${response.data.data.id}`) //fetch article using response id
//         .then((response) => console.log(response.data.data)) // log article
//   );

//update then log tags

// axios
//   .patch("/blog/articles/59", {
//     tags: ["fun", "axios", "boss", "Updated YO!"],
//   })
//   .then((response) => console.log(response.data.data.tags));

//add a comment to an article and log its id
// axios
//   .post("/blog/articles/59/comments", {
//     email: "will@will.com",
//     comment: "nice",
//   })
//   .then((response) => console.log(response.data.data.id));

// list comments from an article
axios.get("/blog/articles/59/comments").then((response) => {
  let comments = response.data.data.map((comment) => comment.comment);
  console.log(comments);
});
