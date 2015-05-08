function removeCustomMarker(object) {
  for(i = 0; i < map.markers.length; i++) {
    var marker = map.markers[i];
    if(marker.title == object.id) {
      map.removeMarker(marker);
    }
  }
}

function addCustomMarker(object) {
  map.addMarker({
    lat: object.coordinates.latitude,
    lng: object.coordinates.longitude,
    title: object.id,
    icon: object.icon
  });
}

function updateMarkerPosition(player) {
  removeCustomMarker(player);
  addCustomMarker(player);
}

function matchObjectToMarker(removeObjectMarker, object) {
  for(i = 0; i < map.markers.length; i++) {
    var marker = map.markers[i];
    removeObjectMarker(marker, object);
  }
}

function removePelletMarker(marker, pellet) {
  if(marker.title == pellet.id) {
    map.removeMarker(marker);
  }
};

function removeEnemyMarker(marker, enemy) {
  if(marker.title == enemy.id) {
    map.removeMarker(marker);
    broadcastPwnMsg(enemy);
  }
};

