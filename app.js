const express = require("express");
const app = express();
const port = 4000;
const db = require("./model/index");
const ejs = require("ejs");
const blogController = require("./controller/blogController");

db.sequelize.sync({force:false});

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", blogController.index);

app.get("/createBlog", blogController.renderblog);

//starting the server
app.listen(port, () => {
    console.log("Node server started at port 4000");
  });
  