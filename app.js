const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();
const cookieParser = require("cookie-parser");
const user = require("./routes/user");
const session = require("./routes/session");
const post = require("./routes/post");

const { err } = require("./controller/auth");
const app = express();

mongoose.connect(process.env.MONGO_URI);

app.listen(process.env.PORT);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(user);
app.use(session);
app.use(post);
app.use(err);
app.use(cookieParser);
