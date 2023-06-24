const db = require("../model/index");

exports.index = async (req, res) => {

  const blogs = await db.blog.findAll(
        
    );
    
    
  console.log(blogs);
  res.render("index", {blogs});    

  };

  exports.renderblog = async (req, res) => {
    res.render("createBlog");
  };

  exports.createBlog = async (req,res) => {
    const { title, description, image } = req.body; //calling objects from the body separately
    console.log(title, description, image);

    db.blog.create({
      //inserting data into database
      Title: title,
      Description: description,
      Image: "http://localhost:4000/" + req.file.filename,
    });

    res.redirect("/index");
  } 

  exports.single = async (req,res) => {
    const blogs = await db.blog.findAll({
      where:{
        id : req.params.id
      }
    });

    res.render("single", {blog: blogs[0]});
  }

  exports.delete = async (req, res) => {
    console.log(req.params.id);
    const blogs = await db.blog.destroy({
      where:{
        id : req.params.id
      }
    });
    res.redirect("/");
  }

  exports.edit = async (req, res) => {
    const blogs = await db.blog.findAll({
      where:{
        id: req.params.id
      }
    });

    res.render("edit",{blog: blogs[0]});
  };

  exports.updateBlog = async (req, res) => {
    updatedData = {
      title: req.body.title,
      description: req.body.description,
    };
  
    //Update image only if new image is selected
    if (req.file) {
      const image = "http://localhost:5000/" + req.file.filename;
      updatedData.image = image;
    }
  
    await blogs.update(updatedData, {
      where: {
        id: req.params.id,
      },
    })
    console.log("Updated successfully")
    res.redirect("/")
  }