var Pellet = function() {
  this.coordinates = {
    lat: undefined,
    lng: undefined
  };
  this.tag = "pellet";
  this.icon = '../images/pellets_small.png';
};

Pellet.prototype.setPosition = function(lat, lon) {
  this.coordinates.lat = lat;
  this.coordinates.lng = lon;
};
