// This file contains Socket.io client functions,
// methods preceded by "listenFor" or "broadcast" in other files are strictly socket.io methods
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

function broadcastPacmanInvincibility() {
  $('.invincible').show();
  socket.emit('pacman eats pellet', { id: player.id });
}

function broadcastPwnMsg(enemy) {
  socket.emit('pwned', { id: enemy.id, icon: enemy.icon });
}

function listenForEnemyLocation() {
  socket.on('new player location', function(data) {
    checkForEnemyRedundancy(data);
    checkForUndefId();
    if(contains(player.fallenEnemies, data) == false && contains(player.enemies, data) == true) {
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
    changePlayerStatus(player);
  });
}

// Methods listed as "checkFor" are client data management functions
// =================================================================
function checkForUndefId() {
  for(i = 0; i < player.enemies.length; i++) {
    var enemy = player.enemies[i];
    if(enemy.id == undefined) {
      player.enemies.splice(i, 1);
    }
  }
}

function checkForEnemyRedundancy(data) {
  if(contains(player.enemies, data) == false && contains(player.fallenEnemies, data) == false) {
    player.enemies.push(data);
  } else {
    var i = player.enemies.indexOf(data);
    player.enemies.splice(i, 1);
  }
}

// =======================================



// Enemy Management
// ==========================================

function removeEnemy(enemy, data) {
  if(enemy.id == data.id) {
    player.enemies.splice(i, 1);
    removeCustomMarker(enemy);
  }
}

function updateEnemyLocation(enemy, data) {
  if(enemy.id == data.id) {
    enemy.coordinates = data.coordinates;
    enemy.icon = data.icon;
    updateMarkerPosition(enemy);
  }
}

function enemyManagement(enemyFunc, data) {
  for(i = 0; i < player.enemies.length; i++) {
    var enemy = player.enemies[i];
    enemyFunc(enemy, data);
  }
}
// ============================================



// player UI functions
// =====================================

function isPwned(data) {
  if(data.id == player.id) {
    clearInterval(geolocQueryLoop);
    removeCustomMarker(player);
    window.location.replace('/lost');
  } else {
    enemyManagement(removeEnemy, data);
    youWin(data);
  }
}

function youWin(data) {
  if(player.tag == 'Pacman') {
    if(player.fallenEnemies.length == 4) {
      window.location.replace('/won');
    }
  } else {
    if(data.icon == "/images/mini_Pacman.png") {
      window.location.replace('/won');
    }
  }
}
// =======================================



function contains(array, obj) {
  // thank you, random SO guy
  var i = array.length;
  while (i--) {
    if (array[i].id == obj.id) {
      return true;
    }
  }
  return false;
}
