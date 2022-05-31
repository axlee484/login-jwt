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

exports.getProfile = function (req, res) {
  return res.send(req.profile);
};

exports.getAll = function (req, res) {
  userModel.find({}, function (err, user) {
    if (err) return res.json(err);
    const all = user.map((val) => {
      const { email, username } = val;
      return { email, username };
    });
    return res.json(all);
  });
};
exports.userById = function (req, res, next, id) {
  userModel.findOne({ username: id }, (err, user) => {
    if (err) return res.json({ err: err });
    if (!user) return res.redirect("/");

    req.profile = user;
    next();
  });
};
