const express = require("express");
const ejs = require("ejs");
const app = express();
const bodyParser = require("body-parser");
const todoController = require("./controllers/todoControllers");
const port = 3000;

app.set("view engine", "ejs");

app.use(express.json());

app.use(express.static("./public"));
// app.get("/", function (req, res, next) {
//   res.status(200).send("Server running at", port);
// });

todoController(app);

app.listen(port, () => {
  console.log("Server running at", port);
});
