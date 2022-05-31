const { getPost, createPost } = require("../controller/post");
const { auth } = require("../controller/auth");
const router = require("express").Router();

router.get("/post", auth, getPost);
router.post("/post", auth, createPost);

module.exports = router;
