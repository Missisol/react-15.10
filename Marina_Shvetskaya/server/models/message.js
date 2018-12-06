const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  author: { type: String, required: true },
  text: { type: String, required: true },
  timestamp: { type: Date, default: new Date() },
});

module.exports = mongoose.model('Message', messageSchema);