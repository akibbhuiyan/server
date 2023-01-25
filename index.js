const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.send("Hello World!");
});

const api = [
  {
    name: "akib",
    age: 77,
  },
  {
    name: "jishad",
    age: 23,
  },
];
app.get("/api", (req, res) => {
  res.send(api);
});
app.listen(process.env.PORT || 9001, () => {
  console.log("Listhening to port");
});
