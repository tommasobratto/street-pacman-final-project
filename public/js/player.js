var Player = function() {
  this.coordinates = {
    latitude: undefined,
    longitude: undefined
  };
  this.id;
  this.status;
  this.tag;
  this.icon;
  this.enemies = [];
  this.fallenEnemies = [];
};

Player.prototype.getLocation = function(geolocation) {
  this.coordinates.latitude = geolocation.latitude;
  this.coordinates.longitude = geolocation.longitude;
};
