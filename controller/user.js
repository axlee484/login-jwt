const userModel = require("../model/user");
const _ = require("lodash");

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
      const { username, fullName, email } = user;
      return res.json({ username, fullName, email });
    });
  });
};

exports.deleteUser = function (req, res) {
  const user_ = req.profile;
  user_.remove((err, user) => {
    if (err) return res.json(err);
    req.profile = undefined;
    return res.json({ deleted: user });
  });
};

exports.getProfile = function (req, res) {
  return res.json({ p: req.profile, a: req.auth });
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
    req.profile.hashPassword = undefined;
    req.profile.salt = undefined;
    next();
  });
};

exports.update = function (req, res) {
  let user = req.profile;

  user = _.extend(user, req.body);

  user.save((err) => {
    if (err) return res.json(err);
    req.profile = user;
    req.profile.hashPassword = undefined;
    req.profile.salt = undefined;
    res.json(req.profile);
  });
};
