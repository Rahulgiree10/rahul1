const express = require("express");
const app = express();
const port = 4000;
const db = require("./model/index");
const ejs = require("ejs");
const blogController = require("./controller/blogController");
const {multer, storage} = require("./services/multerConfig");
const upload = multer({storage: storage});
const path = require("path");

app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

db.sequelize.sync({force:false});

app.get("/", blogController.index);

app.post("/createBlog", upload.single("image"), blogController.createBlog);

app.get("/createBlog", blogController.renderblog);

app.use(express.static(path.join(__dirname, "uploads")));

app.get("/index", blogController.index);

app.get("/single/:id", blogController.single);

app.get("/delete/:id", blogController.delete);

//starting the server
app.listen(port, () => {
    console.log("Node server started at port 4000");
  });
  