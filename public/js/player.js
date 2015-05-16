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
}

Player.prototype.getLocation = function(geolocation) {
  this.coordinates.latitude = geolocation.latitude;
  this.coordinates.longitude = geolocation.longitude;
}

Player.prototype.getIcon = function(icon) {

  switch(icon) {
    case 'Pacman': {
      this.icon = '/images/mini_Pacman.png';
      break;
    }

    case 'Shadow': {
      this.icon = '/images/shadow-white.png'
      break;
    }

    case 'Speedy': {
      this.icon = '/images/speedy-white.png'
      break;
    } 

    case 'Bashful': {
      this.icon = '/images/bashful-white.png'
      break;
    }

    case 'Pokey': {
      this.icon = '/images/pokey-white.png'
      break;
    }

    default:
      this.icon = undefined;
  }

  this.initStatus(icon);
}

Player.prototype.initStatus = function(icon) {
  if(icon == 'Pacman') {
    this.tag = icon;
    this.status = 'weak';
  } else {
    this.tag = 'Ghost';
    this.status = 'invincible';
  }
}

Player.prototype.changeStatus = function() {
  if(this.status == 'weak') {
    this.status = 'invincible';
  } else {
    this.status = 'weak';
  }
}

module.exports = Player;
