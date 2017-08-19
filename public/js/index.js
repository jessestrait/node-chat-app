var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');
});

socket.on('disconnect', function () {
  console.log('disConnected from server');
});

socket.on('newMessage', function (message){
  console.log('New Message', message);
});
