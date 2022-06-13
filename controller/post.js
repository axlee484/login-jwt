const postModel = require("../model/post");
const formidable = require("formidable");
const fs = require("fs");
exports.createPost = function (req, res, next) {
  const post = new postModel(req.body);
  post.postedBy = req.profile;

  post.save((err, post) => {
    if (err) return res.json({ err });
    return res.json({ created: post, id: req.profile });
  });
};

exports.getPost = function (req, res, next) {
  // postModel.findOne({ "body.content": "redyuyuyuyuy" }, (err, post) => {
  //   if (err) return res.json({ err });
  //   if (!post) return res.json({ err: "no post" });
  //   const {
  //     body: { caption, content },
  //   } = post;
  //   res.json({ body: { caption, content } });
  // });
  postModel.find({}, (err, post) => {
    if (err) return res.json({ err });
    if (!post) return res.json({ err: "no post" });

    res.json(post);
  });
};
