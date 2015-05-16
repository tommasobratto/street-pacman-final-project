var assert = require("assert");
var Pellet = require("../../public/js/pellet.js");
var pellet = new Pellet();

describe('Pellet', function() {

  it('should be initialised with undefined coordinates', function() {
    assert.equal(undefined, pellet.coordinates.latitude);
    assert.equal(undefined, pellet.coordinates.longitude);
  });

  it('should be initialised with an icon', function() {
    assert.equal('../images/pellets_small.png', pellet.icon);
  });

  it('should be able to get a location', function() {
    var latitude = 51.5;
    var longitude = 3.5;

    pellet.setPosition(latitude, longitude);

    assert.equal(51.5, pellet.coordinates.latitude);
    assert.equal(3.5, pellet.coordinates.longitude);
  });
});
