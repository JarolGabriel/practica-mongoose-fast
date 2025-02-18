const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  userName: {
    type: String,
    unique: true,
    required: true,
  },
  password: String,
  date: {
    type: Date,
    default: new Date(),
  },
  name: String,
});

module.exports = model("User", userSchema);
