const mongoose = require("mongoose");
const schema = mongoose.Schema({
  caption: {
    type: String,
    required: false,
  },
  post: {
    required: true,
    type: String,
  },
});

const model = new mongoose.model("student", schema, "StudentDB");
module.exports = { model };
