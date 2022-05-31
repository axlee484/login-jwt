require("dotenv").config();
const router = require("express").Router();
const { expressjwt: jwt } = require("express-jwt");
const { userById } = require("../controller/user");
const auth = jwt({
  secret: process.env.JWT_TOKEN,
  algorithms: ["HS256"],
  userProperty: "auth",
});

const err = function (err, req, res, next) {
  if (err.name == "UnauthorizedError")
    res.status(401).json({ message: "UnauthorizedError" });
};

const hasAuth = function (req, res, next) {
  const authorized = req.profile && req.auth && req.auth.id == req.profile.id;
  if (!authorized) {
    res.send(403);
  }
};

router.param("username", userById);
module.exports = { auth, err, router, hasAuth };
