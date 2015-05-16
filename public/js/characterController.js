var player = new Player();

function setIcon() {
  var icon = JSON.parse(localStorage.getItem('data'));
  player.getIcon(icon);
}
