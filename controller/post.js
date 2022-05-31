const postModel = require("../model/post");

exports.getPost = function (req, res, next) {
  console.log(req);
  res.json(req.body);
};
