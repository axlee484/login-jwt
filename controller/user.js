const userModel = require("../model/user");

exports.home = function (req, res) {
  res.json({ page: "Home" });
};
exports.signup = function (req, res) {
  userModel.findOne({ email: req.body.email }, (err, user) => {
    if (err) return res.json(err);
    if (user) return res.json({ user: "exists" });
    const newUser = new userModel(req.body);
    newUser.save((err, user) => {
      if (err) return res.json(err);
      return res.json(user);
    });
  });
};

exports.userById = function (req, res, next, username) {
  userModel.findById(username).exec((err, user) => {
    if (err || !user) return res.status(400);
    req.profile = user;
    next();
  });
};
