const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: [true, "Name is required field"],
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
  },
  phone: {
    type: String,
    required: false,
  },
  password: {
    type: String,
    required: true,
  },
  Subscribed: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Categories',
  }],
  Channels: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Channel',
  }],
  createdAt: {
    type: String,
    default: Date.now(),
  },
});

const User = mongoose.model("user", userSchema);
module.exports = User;
