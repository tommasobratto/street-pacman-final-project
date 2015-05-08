var express = require('express');
var app = express();

require('./router/main')(app);
var server = require('http').createServer(app);

var throng = require('throng');
var port = process.env.PORT || 3000;
var WORKERS = process.env.WEB_CONCURRENCY || 1;

var io = require('socket.io')(server);

var players = [];
var coords = {
  latitude: undefined,
  longitude: undefined
};

throng(start, {
  workers: WORKERS,
  lifetime: Infinity
});

function start() {
  app.set('views', __dirname + '/public');
  app.use(express.static('public'));
  app.set('view engine', 'ejs');
  app.engine('html', require('ejs').renderFile);

  server.listen(port, function() {
    console.log('server listening on port ' + port)
  });

/* ==================================
  Socket.io logic
=================================== */

  io.on('connection', function(socket) {
    if(socket.id != undefined && players.count < 5) {
      players.push(socket.id);
      console.log("players currently connected " + players);
    }

    console.log('user ' + socket.id + ' connected');

    socket.on('player moves', function(player) {
      socket.broadcast.emit('new player location', { id: player.id, coordinates: player.coordinates, icon: player.icon, status: player.status });
    });

    socket.on('disconnect', function() {
      socket.broadcast.emit('player disconnected', { id: socket.id });
      console.log('user ' + socket.id + ' disconnected');
      var i = players.indexOf(socket.id);
      players.splice(i, 1);
    });

    socket.on('pwned', function(data) {
      io.sockets.emit('player pwned', { id: data.id, icon: data.icon });
      console.log(data.id + ' pwned');
    });

    socket.on('pacman eats pellet', function(data) {
      socket.broadcast.emit('pacman is invincible', data);
    });
  });

// ==================================
}

module.exports = server;
