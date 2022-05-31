const { check, validationResult } = require("express-validator");

const result = (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) return res.send(error.array());
  next();
};

exports.validateUser = [
  check("email").isEmail().withMessage("Invalid email address"),
  check("password")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters")
    .matches(/\d/)
    .withMessage("Password must contain a number"),
  result,
];

exports.validatePost = [
  check("title").isLength({ min: 4, max: 120 }),
  check("body.content").isLength({ min: 4, max: 120 }),
  result,
];
