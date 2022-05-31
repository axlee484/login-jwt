const { loginPage, login, logout } = require("../controller/session");
const router = require("express").Router();
router.get("/session", loginPage);
router.post("/session", login);
router.delete("/session", logout);

module.exports = router;
