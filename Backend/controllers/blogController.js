const Blog = require("../models/blogsModel");
const { resizeImage } = require("../utils/resizeImage");
const { uploadFile, deleteFile } = require("../utils/s3");

async function createNewBlog(req, res) {
  try {
    const resizeCover = await resizeImage(req.files["blogCover"][0]);
    await uploadFile(resizeCover);
    const blog = new Blog({
      title: req.body.title,
      subHeading: req.body.subHeading,
      blogsData: req.body.blogsData,
      blogCover: resizeCover.filename,
    });
    await blog.save();
    res.status(201).json(blog);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
}

async function getAllBlogs(req, res) {
  try {
    const allBlogs = await Blog.find({});
    res.status(200).json(allBlogs);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
}

async function updateAblog(req, res) {
  try {
    const id = req.params.id;
    let body = {};
    if (req.body.title) {
      body.title = req.body.title;
    }
    if (req.body.subHeading) {
      body.subHeading = req.body.subHeading;
    }
    if (req.body.blogsData) {
      body.blogsData = req.body.blogsData;
    }
    let resizeCover;
    if (req.files["blogCover"][0]) {
      resizeCover = await resizeImage(req.files["blogCover"][0]);
      await uploadFile(resizeCover);
    }
    const updatedBlog = await Blog.findByIdAndUpdate(id, body);
    res.status(200).json(updatedBlog);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
}

async function deleteAblog(req, res) {
  try {
    const id = req.params.id;
    const deletedObject = await Blog.findById(id);
    await deleteFile(deletedObject.blogCover);
    await Blog.findByIdAndDelete(id);
    res.status(200).json({ message: "Deleted Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
}

module.exports = { createNewBlog, getAllBlogs, updateAblog, deleteAblog };
