import Blog from "@/models/blogsModel";

const db = require("@/utils/db");

export async function GET(req, { params }) {
  try {
    const blogId = params.blogId;
    const blog = await Blog.findById(blogId);
    return Response.json(blog, { status: 200 });
  } catch (error) {
    console.log(error);
    return Response.json({ message: error.message }, { status: 500 });
  }
}
