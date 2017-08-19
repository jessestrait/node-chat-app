const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New User connected');

  socket.emit('newMessage', {
    from: 'Jophnny@example.com',
    text: 'Hey whats up Donnuie..',
    createdAt: 1233
  });

  socket.on('createMessage', (message) => {
    console.log('createMessage', message);
  });

  socket.on('disconnect', () => {
    console.log(' Client disconnected ');
  });
});

server.listen(port, () => {
  console.log('Server is up on port ' + port);
});

//console.log(publicPath);
