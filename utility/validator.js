const { body, validationResult } = require("express-validator");

exports.validateUser = [
  body("email").isEmail(),
  body("password").isLength({ min: 8 }),
  (req, res, next) => {
    const error = validationResult(req);
    if (error) return res.send(error);
    next();
  },
];
