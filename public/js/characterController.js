var player = new Player();

function setIcon() {
  var icon = JSON.parse(localStorage.getItem('data'));
  getIcon(icon);
}

function getIcon(icon) {

  switch(icon) {
    case 'Pacman': {
      player.icon = '/images/mini_Pacman.png';
      break;
    }

    case 'Shadow': {
      player.icon = '/images/shadow-white.png'
      break;
    }

    case 'Speedy': {
      player.icon = '/images/speedy-white.png'
      break;
    } 

    case 'Bashful': {
      player.icon = '/images/bashful-white.png'
      break;
    }

    case 'Pokey': {
      player.icon = '/images/pokey-white.png'
      break;
    }

    default:
      player.icon = undefined;
  }

  function initStatus(icon) {
    if(icon == 'Pacman') {
      player.tag = 'Pacman';
      player.status = 'weak';
      console.log(player.status)
    } else {
      player.tag = 'Ghost';
      player.status = 'invincible';
    }
  }
  initStatus(icon);
}
