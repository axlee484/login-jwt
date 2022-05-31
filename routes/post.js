const { getPost, createPost } = require("../controller/post");
const { validatePost } = require("../utility/validator");
const { auth } = require("../controller/auth");
const router = require("express").Router();

router.get("/post", auth, getPost);
router.post("/post", auth, validatePost, createPost);

module.exports = router;
