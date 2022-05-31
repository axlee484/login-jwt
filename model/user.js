const mongoose = require("mongoose");
const uuid = require("uuid");
const crypto = require("crypto");

const schema = mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true,
  },
  username: {
    type: String,
    required: true,
    maxLength: 32,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  joinedOn: {
    type: Date,
    default: new Date(),
  },
  hashPassword: {
    type: String,
    required: true,
  },
  salt: String,
});

schema.virtual("password").set(function (password) {
  this._password = password;
  this.salt = uuid.v4();
  this.hashPassword = this.encryptedPassword(password);
});

schema.methods = {
  encryptedPassword: function (password) {
    if (!password) return "";
    try {
      return crypto
        .createHmac("sha256", this.salt)
        .update(password)
        .digest("hex");
    } catch (e) {
      return "";
    }
  },
  passwordMatch: function (password) {
    return this.encryptedPassword(password) == this.hashPassword;
  },
};

const model = new mongoose.model("user", schema, "UserDB");
module.exports = model;
