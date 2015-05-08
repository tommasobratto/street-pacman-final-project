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
  setPlayerCoords(position);
  updateMarkerPosition(player);
  // The function below works to remove some occasional marker duplicates left by a bug,
  // as a substitute for the previous, redundant checkForMarkerDuplicate()
  removeCustomMarker();

  if(player.tag == 'Pacman') {
    eatPelletChance(player);
  }

  if(player.status == 'invincible') {
    eatsWeak(player);
  }

  broadcastPlayerMovement(player);
  map.setCenter(coords.latitude, coords.longitude);
}

function errorCallback() {
  console.log("the geolocation function didn't load properly");
}

function setPlayerCoords(position) {
  coords.latitude = position.coords.latitude;
  coords.longitude = position.coords.longitude;
  player.getLocation(coords);
}
