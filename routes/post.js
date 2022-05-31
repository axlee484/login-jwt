const { getPost } = require("../controller/post");
const { auth } = require("../controller/auth");
const router = require("express").Router();

router.get("/post", auth, getPost);

module.exports = router;
