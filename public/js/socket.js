// This file contains Socket.io client functions,
// methods preceded by "listenFor" or "broadcast" 
// in other files are strictly Socket.io methods
var socket = io();

socket.on('connect', function() {
  player.id = socket.id;
});

function broadcastPlayerMovement(player) {
  // this function is called in the playerGeolocation.js file,
  // every time a GPS tracker query is sent
  socket.emit('player moves', {
    id: socket.id,
    coordinates: player.coordinates,
    icon: player.icon,
    status: player.status
  });
}

function broadcastPwnMsg(enemy) {
  socket.emit('pwned', { id: enemy.id, icon: enemy.icon });
}

function broadcastPacmanInvincibility() {
  $('.invincible').show();
  socket.emit('pacman eats pellet', { id: player.id });
}

function listenForEnemyLocation() {
  socket.on('new player location', function(data) {
    
    checkForEnemyRedundancy(data);
    enemyManagement(checkForUndefId);

    if(contains(player.fallenEnemies, data) == false 
      && contains(player.enemies, data) == true) {

      enemyManagement(updateEnemyLocation, data);

    }
  });
}

function listenForEnemyEscape() {
  socket.on('player disconnected', function(data) {
    enemyManagement(removeEnemy, data);
  });
}

function listenForPwning() {
  socket.on('player pwned', function(data) {
    isPwned(data);
   });
}

function listenForInvinciblePacman() {
  socket.on('pacman is invincible', function(data) {
    player.changeStatus();
  });
}

// Methods listed as "checkFor" are client data management functions
// =================================================================
function checkForUndefId(enemy, i) {
  if(enemy.id == undefined) {
    player.enemies.splice(i, 1);
  }
}

function checkForEnemyRedundancy(data) {
  if(contains(player.enemies, data) == false
    && contains(player.fallenEnemies, data) == false) {

    player.enemies.push(data);

  } else {

    var i = player.enemies.indexOf(data);
    player.enemies.splice(i, 1);

  }
}
// =======================================



function contains(array, obj) {
  // thank you, random SO guy
  var i = array.length;
  while (i--) {
    if (array[i].id == obj.id) {
      return true;
      break;
    }
  }
  return false;
}
