const db = require("../model/index");

exports.index = async (req, res) => {
    res.render("index");
  };

  exports.renderblog = async (req, res) => {
    res.render("createBlog");
  };
  