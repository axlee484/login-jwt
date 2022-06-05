const router = require("express").Router();
const {
  userById,
  getProfile,
  deleteUser,
  update,
} = require("../controller/user");
const { auth, hasAuth } = require("../controller/auth");

router.param("id", userById);
router.get("/:id", getProfile);
router.put("/:id", auth, hasAuth, update);
router.delete("/:id", auth, hasAuth, deleteUser);
module.exports = router;
