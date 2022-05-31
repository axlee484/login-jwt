const userModel = require("../model/user");
const jwt = require("jsonwebtoken");

exports.loginPage = function (req, res) {
  res.send({ page: "loginPage" });
};
exports.login = function (req, res) {
  userModel.findOne({ email: req.body.email }, (err, user) => {
    if (err) return res.json(err);
    if (!user) return res.json({ response: "signup" });
    if (!user.passwordMatch(req.body.password))
      return res.json({ err: "invalid password" });
    const token = jwt.sign({ id: user.username }, process.env.JWT_TOKEN);
    res.cookie("cookie", token, { expire: new Date() + 9999 });
    const { username, email } = user;
    return res.json({ user: { username, email }, token });
  });
};
exports.logout = function (req, res) {
  res.clearCookie("cookie");
  res.json({ message: "logged out" });
};
