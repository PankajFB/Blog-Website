const express = require("express");
const app = express();

// connection of the database
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/blogs", {})
  .then(() => {
    console.log("database connection is successfull");
  })
  .catch((e) => {
    console.log(e);
  });

// to convert the upcoming data into string because the data coming is in the form of json
app.use(express.json());

// requiring the shema that we have defined
const Blog = require("./db/userSchema");

app.get("/", (req, res) => {
  res.send("this is my server");
});

app.post("/newBlog", (req, res) => {
  const { title, blog } = req.body;

  if (!title || !blog) {
    return res.json({ error: "Please fill the fields properly" });
  }

  const newBlog = new Blog({
    title,
    blog,
  });
  newBlog
    .save()
    .then(() => {
      res.json({ message: "the blog is posted" });
    })
    .catch((err) => {
      console.log(err);
    });
  // .catch(err) => res.json({error :"failed to post the blog"});
});

// to get all the data from the database
app.get("/view", (req, res) => {
  Blog.find((err, val) => {
    if (err) res.json(err);
    else res.json({data: val});
  });
});

app.listen(5000, () => {
  console.log("seriver is running at port 5000");
});
