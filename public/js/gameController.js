// Initialising game state
// Note: In the current version the pellets are set arbitrarily,
// an ideal way would be to set them automatically
// near the first player's geolocation
var pellets = [];

var megaPellet1 = new Pellet();
var megaPellet2 = new Pellet();
var megaPellet3 = new Pellet();
var megaPellet4 = new Pellet();

var geolocQueryLoop = setInterval(queryGPStracker, 2000);

$(document).ready(function() {
  setIcon();
  setPelletPosition(megaPellet1, 51.517900, -0.073658);
  setPelletPosition(megaPellet2, 51.516863, -0.074357);
  setPelletPosition(megaPellet3, 51.516978, -0.073092);
  setPelletPosition(megaPellet4, 51.518191, -0.076093);
  listenForEnemyLocation();
  listenForEnemyEscape();
  listenForPwning();
  listenForInvinciblePacman();
  queryGPStracker();
  geolocQueryLoop;
});
