const postModel = require("../model/post");

exports.createPost = function (req, res, next) {
  const post = new postModel(req.body);
  post.save((err, post) => {
    if (err) return res.json({ err });
    return res.json({ created: post });
  });
};

exports.getPost = function (req, res, next) {
  postModel.findOne({ "body.content": "redyuyuyuyuy" }, (err, post) => {
    if (err) return res.json({ err });
    if (!post) return res.json({ err: "no post" });
    const {
      body: { caption, content },
    } = post;
    res.json({ body: { caption, content } });
  });
};
