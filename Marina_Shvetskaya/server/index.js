const express = require('express');
const http = require('http');
const SocketIO = require('socket.io');
const cors = require('cors');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/test', {useNewUrlParser: true});

const Message = require('./models/message');
const User = require('./models/user');

const app = express();
const server = http.Server(app);
const io = SocketIO(server);

app.use(cors());

const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(session({
  secret: "MyReact",
  resave: false,
  saveUninitialized: true,
  cookie: {maxAge: null},
  store: new MongoStore({mongooseConnection: mongoose.connection}),
}));

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

app.get('/users', async (req, res) => {
  const user = await User.find();
res.json(user);
});

app.post('/user', urlencodedParser, (req, res) => {
  if(!req.body) {
    return res.sendStatus(400);
  }
  res.send('/');
});

server.listen(3000, () => {
  console.log('Server has been started');
});