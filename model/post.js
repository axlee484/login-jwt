const mongoose = require("mongoose");
const schema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    minLength: 4,
    maxLength: 120,
  },
  body: {
    content: {
      type: String,
      required: true,
    },

    caption: {
      type: String,
    },
  },
});

const model = new mongoose.model("post", schema, "PostDB");
module.exports = model;
