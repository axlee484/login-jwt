require("dotenv").config();
const { expressjwt: jwt } = require("express-jwt");
const isAuthorized = function (req, res) {
  return req.auth && req.profile && req.auth.id === req.profile.username;
};

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
  if (!isAuthorized(req, res, next)) {
    res.send(403);
  } else next();
};

module.exports = { auth, err, hasAuth, isAuthorized };
