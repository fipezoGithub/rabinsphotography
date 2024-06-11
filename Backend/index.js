require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { getFileStream } = require("./utils/s3");
const careerRouter = require("./routers/careerRouter");
const db = require("./utils/db");
const babyAndMaternityRouter = require("./routers/babyAndMaternityRouter");
const eventRouter = require("./routers/eventRouter");
const contactRouter = require("./routers/contactRouter");
const weddingRouter = require("./routers/weddingRouter");
const filmRouter = require("./routers/filmRouter");
const joinUsRouter = require("./routers/joinUsRouter");
const blogRouter = require("./routers/blogRouter");
const portfolioRouter = require("./routers/portfolioRouter");
const Wedding = require("./models/weddingModel");
const Event = require("./models/eventModel");
const BabyAndMaternity = require("./models/babyAndMaternityModel");
const userRouter = require("./routers/userRouter");
const reelRouter = require("./routers/reelRouter");

const app = express();
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));
app.use("/uploads", express.static("uploads"));

app.use("/api/career", careerRouter);
app.use("/api/baby-and-maternity", babyAndMaternityRouter);
app.use("/api/event", eventRouter);
app.use("/api/contact-us", contactRouter);
app.use("/api/wedding", weddingRouter);
app.use("/api/film", filmRouter);
app.use("/api/join-us", joinUsRouter);
app.use("/api/blogs", blogRouter);
app.use("/api/portfolio", portfolioRouter);
app.use("/api/user", userRouter);
app.use("/api/reel", reelRouter);

app.get("/api/all-images", async (req, res) => {
  try {
    const limit = parseInt(req.query.limit);
    const offset = parseInt(req.query.offset);
    let allImgResponse = [];
    const allWeddingPhoto = await Wedding.find({}, { images: 1 });
    const allEventsPhoto = await Event.find({}, { images: 1 });
    const allMaternityPhoto = await BabyAndMaternity.find({}, { images: 1 });
    allWeddingPhoto.map((item) =>
      item.images.map((it) => allImgResponse.push(it))
    );
    allEventsPhoto.map((item) =>
      item.images.map((it) => allImgResponse.push(it))
    );
    allMaternityPhoto.map((item) =>
      item.images.map((it) => allImgResponse.push(it))
    );
    if (!req.query.limit) {
      return res.status(200).json(allImgResponse);
    }
    const start = offset * limit;
    const end = start + limit;
    const deliveryResponse = allImgResponse.slice(start, end);
    return res.status(200).json(deliveryResponse);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
});

app.get("/api/images/:key", async (req, res) => {
  const key = req.params.key;
  try {
    const readStream = await getFileStream(key);
    readStream.pipe(res);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/api", (req, res) => {
  res.send("Hello From Rabin's Photography Backend Server");
});

app.listen((port = 8080), () => {
  console.log(`Server is running on port ${port}`);
});
