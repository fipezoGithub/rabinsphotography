const express = require("express");
const {
  getAllBlogs,
  createNewBlog,
  updateAblog,
  deleteAblog,
  getBlogById,
} = require("../controllers/blogController");
const blogCoverUpoload = require("../middleware/blogCoverUpload");

const blogRouter = express.Router();

blogRouter.route("/").get(getAllBlogs).post(blogCoverUpoload, createNewBlog);
blogRouter
  .route("/:id")
  .get(getBlogById)
  .put(blogCoverUpoload, updateAblog)
  .delete(deleteAblog);

module.exports = blogRouter;
