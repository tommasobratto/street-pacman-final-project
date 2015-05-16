var assert = require("assert");
var Player = require("../../public/js/player.js");
var player = new Player();

describe('Player', function() {

  it('should be initialised with an undefined location', function() {
    assert.equal(undefined, player.coordinates.latitude);
    assert.equal(undefined, player.coordinates.longitude);
  });

  it('should be initialised with an undefined icon', function() {
    assert.equal(undefined, player.icon);
  });

  it('should be initialised with an undefined status', function() {
    assert.equal(undefined, player.status);
  });

  it('should be initialised with an undefined tag', function() {
    assert.equal(undefined, player.tag);
  });

  it('should be initialised with an undefined id', function() {
    assert.equal(undefined, player.id);
  });

  it('should be initialised with an empty array of enemies', function() {
    assert.deepEqual([], player.enemies);
  });

  it('should be initialised with an empty array of fallen enemies', function() {
    assert.deepEqual([], player.fallenEnemies);
  });

  describe('Player location', function() {

    before(function() {
      coordinates = {
        latitude: 51.5,
        longitude: 3.5
      };

      player.getLocation(coordinates);
    });

    it('should be able to get a location', function() {
      assert.equal(51.5, player.coordinates.latitude);
      assert.equal(3.5, player.coordinates.longitude);
    });
  });

  describe('Player selects Pacman', function() {
    var icon;

    beforeEach( function() {
      icon = 'Pacman';
      player.getIcon(icon);
    });

    it('should be able to get a "Pacman" icon', function() {
      assert.equal('/images/mini_Pacman.png', player.icon);
    });

    it('should be able to get a "Pacman" tag', function() {
      assert.equal('Pacman', player.tag);
    });

    it('should be able to get a "weak" status', function() {
      assert.equal('weak', player.status);
    });
  });

  describe('Player selects Ghost', function() {
    var icon;

    beforeEach( function() {
      icon = 'Shadow';
      player.getIcon(icon);
    });

    it('should be able to get a "Shadow" icon', function() {
      assert.equal('/images/shadow-white.png', player.icon);
    });

    it('should be able to get a "Ghost" tag', function() {
      assert.equal('Ghost', player.tag);
    });

    it('should be able to get a "invincible" status', function() {
      assert.equal('invincible', player.status);
    });

  });
});
