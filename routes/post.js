const router = require("express").Router();
const { getPost, createPost } = require("../controller/post");
const { validatePost } = require("../utility/validator");
const { auth, hasAuth } = require("../controller/auth");
router.get("/post", getPost);
router.post("/post", auth, validatePost, createPost);

module.exports = router;
