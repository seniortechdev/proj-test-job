const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const notificationSchema = new Schema({
  sendTo:
  {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  sentOn: {
    type:String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Categories',
    required: true,
  },
  channel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Channel',
    required: true,
  },
  sendBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  createdAt: {
    type: String,
    default: Date.now(),
  },
});

const Notification = mongoose.model("Notification", notificationSchema);
module.exports = Notification;
