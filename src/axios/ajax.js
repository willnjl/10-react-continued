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
axios
  .post("/blog/articles/59/comments", {
    email: "will@will.com",
    comment: "nice",
  })
  .then((response) => console.log(response.data.data.id));

// list comments from an article
// axios.get("/blog/articles/59/comments").then((response) => {
//   let comments = response.data.data.map((comment) => comment.comment);
//   console.log(comments);
// });

//get tags
// axios.get("/blog/tags").then((response) => {
//   console.log(response.data.data);
// });

// axios
//   .get("/blog/articles/100")
//   .then("found")
//   .catch(() => console.log("not found"));

//output array of just the titles
// axios.get("/blog/articles").then((response) => {
//   let titles = response.data.data.map((article) => article.title);
//   console.log(titles);
// });

//console.table tag frequency

axios.get("/blog/articles").then((response) => {
  let tags = response.data.data.flatMap((article) => article.tags);

  let table = tags.reduce((tally, tag) => {
    if (!tally[tag]) {
      tally[tag] = 0;
    }
    tally[tag] += 1;
    return tally;
  }, {});
  console.table(table);
});
