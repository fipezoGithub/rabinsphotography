import Blog from "@/models/blogsModel";

const db = require("@/utils/db");

export async function GET(req) {
  try {
    const blogs = await Blog.find({});
    return Response.json(blogs, { status: 200 });
  } catch (error) {
    console.log(error);
    return Response.json({ message: error.message }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const data = await req.json();
    const blog = new Blog({
      title: data.title,
      subHeading: data.subHeading,
      blogsData: data.blogsData,
      blogCover: data.blogCover,
    });
    await blog.save();
    return Response.json(blog, { status: 201 });
  } catch (error) {
    console.log(error);
    return Response.json({ message: error.message }, { status: 500 });
  }
}
