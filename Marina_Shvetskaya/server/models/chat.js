const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chatSchema = new Schema({
  username: { type: String, required: true },
  socketId: { type: String, required: true },
});

module.exports = mongoose.model('Chat', chatSchema);

