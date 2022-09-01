const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const port = process.env.PORT || 3000;
const authRouter = require("./routes/auth.route.js");
const postRouter = require("./routes/post.route.js");

const app = express();

//Middleware
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api/", authRouter);
app.use("/api/blogs", postRouter);

//server running
app.listen(port, () => {
  console.log(`Listening to localhost: ${port}`);
});
