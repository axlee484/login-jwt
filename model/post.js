const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const schema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    minLength: 4,
    maxLength: 120,
  },
  body: {
    photo: {
      type: String,
      required: true,
    },

    caption: {
      type: String,
    },
  },

  postedBy: {
    type: ObjectId,
    ref: "UserDB",
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

const model = new mongoose.model("post", schema, "PostDB");
module.exports = model;
