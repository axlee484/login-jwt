const router = require("express").Router();
const { home, signup } = require("../controller/user");
const { validateUser } = require("../utility/validator");

router.get("/", home);
router.post("/", validateUser, signup);
module.exports = router;
