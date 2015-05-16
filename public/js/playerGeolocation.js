var coords = {
  latitude: undefined,
  longitude: undefined
};

function queryGPStracker() {
  var options = {
    enableHighAccuracy: true
  };
  navigator.geolocation.getCurrentPosition(updatePlayerLocation, errorCallback, options);
}

function updatePlayerLocation(position) {
  // Main player game loop
  coords.latitude = position.coords.latitude;
  coords.longitude = position.coords.longitude;

  if(player.coordinates != coords) {
    setPlayerCoords(coords);
    updateMarkerPosition(player);

    // These conditional statements call
    // their respective game logic functions
    if(player.tag == 'Pacman') {
      eatPelletChance(player);
    }

    if(player.status == 'invincible') {
      enemyManagement(eatEnemyChance);
    }

    broadcastPlayerMovement(player);
    map.setCenter(coords.latitude, coords.longitude);
  }
}

function errorCallback() {
  console.log("the geolocation function didn't load properly");
}

function setPlayerCoords(coords) {
  player.getLocation(coords);
}
