const postModel = require("../model/post");

exports.createPost = function (req, res, next) {
  const post = new postModel(req.body);
  post.save((err, post) => {
    if (err) return res.json({ err });
    return res.json({ created: post });
  });
};

exports.getPost = function (req, res, next) {
  postModel.find({}, function (err, post) {
    if (err) return res.json({ err });
    return res.json(post);
  });
};
