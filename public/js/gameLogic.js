function calculateDistance(obj) {
  var from = new google.maps.LatLng(player.coordinates.latitude, player.coordinates.longitude);
  var to = new google.maps.LatLng(obj.coordinates.latitude, obj.coordinates.longitude);
  return google.maps.geometry.spherical.computeDistanceBetween(from, to).toFixed(2);
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
  var pelletDist = calculateDistance(pellet);
    if(pelletDist < 6) {
      var i = pellets.indexOf(pellet);
      pellets.splice(i, 1);

      if(player.status == 'weak') {
        changePlayerStatus(player);
      }

      matchObjectToMarker(removePelletMarker, pellet);
      broadcast1337();
      mortal(player);
    }
  }
}

function eatsWeak(player) {
  for(i = 0; i < player.enemies.length; i++ ) {
    var enemy = player.enemies[i];
    var enemyDist = calculateDistance(enemy);
    if (enemyDist < 10 && enemy.status == 'weak') {
      player.fallenEnemies.push(enemy);
      player.enemies.splice(i, 1);
      matchObjectToMarker(removeEnemyMarker, enemy);
    }
  }
}

function mortal(player) {
  setTimeout(function() {
    changePlayerStatus(player);
    $('.invincible').hide();
 }, 60000);
}
