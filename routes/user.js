const router = require("express").Router();
const {
  home,
  signup,
  userById,
  getProfile,
  getAll,
} = require("../controller/user");
const { validateUser } = require("../utility/validator");

router.get("/", home);
router.post("/", validateUser, signup);
router.get("/users", getAll);
router.get("/:id", getProfile);
router.param("id", userById);

module.exports = router;
