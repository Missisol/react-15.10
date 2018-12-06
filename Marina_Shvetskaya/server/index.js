const express = require('express');
const http = require('http');
const SocketIO = require('socket.io');
const cors = require('cors');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });

const Message = require('./models/message');

const app = express();
const server = http.Server(app);
const io = SocketIO(server);


app.use(cors());

io.on('connection', (socket) => {
  socket.on('message', async (msg) => {
    let message = new Message(msg);
    message = await message.save();

    socket.broadcast.emit('message', message);
    socket.emit('message', message);
  });

});

app.get('/messages', async (req, res) => {
  const messages = await Message.find();
  res.json(messages);
});

app.get('/messages/:id', async (req, res) => {
  const message = await Message.findById(req.params.id);
  res.json(message);
});

server.listen(3000, () => {
  console.log('Server has been started');
});