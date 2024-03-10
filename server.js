const express = require("express");
const app = express();
const AuthorRoute = require("./AuthorRoute");

const logger = require("./logger");
app.use(express.json());
app.use(logger);

app.use("/books", AuthorRoute);

app.all("*", (req, res) => {
  res.status(404).jsonp({ message: "Page not found" });
});

app.listen(8900, () => {
  console.log("server running at port 8900");
});
