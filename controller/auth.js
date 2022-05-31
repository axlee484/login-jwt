require("dotenv").config();
const { expressjwt: jwt } = require("express-jwt");

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

module.exports = { auth, err, hasAuth };
