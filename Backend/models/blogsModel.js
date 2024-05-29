const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    subHeading: { type: String, required: true },
    blogsData: { type: String, required: true },
    blogCover: { type: String, required: true },
  },
  { timestamps: true }
);

const Blog =
  mongoose.models.blogModel || mongoose.model("blogModel", blogSchema);

module.exports = Blog;
