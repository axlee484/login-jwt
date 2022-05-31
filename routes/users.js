const router = require("express").Router();
const { getUsers, getProfile } = require("../controller/users");
const { userById } = require("../utility/addReqParam");

router.get("/users", getUsers);

module.exports = router;
