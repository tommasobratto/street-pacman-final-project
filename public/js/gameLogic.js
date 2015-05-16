function calculateDistance(player, obj) {
  var playerDist = new google.maps.LatLng(player.coordinates.latitude, player.coordinates.longitude);
  var objDist = new google.maps.LatLng(obj.coordinates.latitude, obj.coordinates.longitude);

  return google.maps.geometry.spherical.computeDistanceBetween(playerDist, objDist);
}

function setPelletPosition(pellet, lat, lon) {
  pellet.id = "pellet" + pellets.length;
  pellet.setPosition(lat, lon);
  pellets.push(pellet);
  addCustomMarker(pellet);
}

function eatPelletChance(player) {
  for(i = 0; i < pellets.length; i++) {
  var pellet = pellets[i];

    if(calculateDistance(player, pellet) < 6) {
      var i = pellets.indexOf(pellet);
      pellets.splice(i, 1);

      if(player.status == 'weak') {
        player.changeStatus();
      }

      removeCustomMarker(pellet);
      broadcastPacmanInvincibility();
      mortalCountdownSwitch(player);
    }
  }
}

function eatEnemyChance(enemy) {
  if (calculateDistance(player, enemy) < 10 && enemy.status == 'weak') {
    
    player.fallenEnemies.push(enemy);
    player.enemies.splice(i, 1);

    removeCustomMarker(enemy);
    broadcastPwnMsg(enemy);
  }
}

function mortalCountdownSwitch(player) {
  setTimeout(function() {
    player.changeStatus();
    $('.invincible').hide();
  }, 60000);
}

// Enemy management functions
// =====================================

function removeEnemy(enemy, data, i) {
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

function enemyManagement(enemyMngFunc, data) {
  for(i = 0; i < player.enemies.length; i++) {
    var enemy = player.enemies[i];

    enemyMngFunc(enemy, data, i);

  }
}

// =====================================



// player UI functions
// =====================================

function isPwned(data) {
  if(data.id == player.id) {
    window.location.replace('/lost');
  } else {
    enemyManagement(removeEnemy, data);
    youWin(data);
  }
}

function youWin(enemyData) {
  if(player.tag == 'Pacman'
    && player.fallenEnemies.length == 4
    || enemyData.icon == "/images/mini_Pacman.png") {

    window.location.replace('/won');
  
  }
}
// =======================================
