const router = require("express").Router();
const {
  home,
  signup,

  getAll,
} = require("../controller/user");

const { validateUser } = require("../utility/validator");

router.get("/", home);
router.post("/", validateUser, signup);
router.get("/users", getAll);

module.exports = router;
