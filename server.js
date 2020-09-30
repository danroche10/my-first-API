const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv/config");

//Middlewares
app.use(cors());
app.use(bodyParser.json());

//Import Routes
const postsRoute = require("./routes/posts");
const indexRoute = require("./routes/index");

app.use("/posts", postsRoute);
app.use("/", indexRoute);

/*//ROUTE
app.get("/", (req, res) => {
  res.send("We are on home");
});*/

//Connect to DB
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Connected to DB")
);

//How do we start listening to the server?

app.listen(3000);
