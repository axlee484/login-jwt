const router = require("express").Router();
const { getPost, createPost } = require("../controller/post");
const { validatePost } = require("../utility/validator");
const { userById } = require("../controller/user");
const { auth, hasAuth } = require("../controller/auth");
router.get("/post", getPost);
router.post("/post/:id", auth, hasAuth, validatePost, createPost);
router.param("id", userById);
module.exports = router;
