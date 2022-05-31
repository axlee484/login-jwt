const router = require("express").Router();
const { home, signup } = require("../controller/user");

router.get("/", home);
router.post("/", signup);
module.exports = router;
