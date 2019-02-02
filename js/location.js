if (!navigator.geolocation) {
  alert('Location information can not be acquired on this device.');
} else {
  searchPosition();
}

function searchPosition() {
  // get geo position
  navigator.geolocation.getCurrentPosition(
  // on success
  function(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    $('#geo_location').html('Latitude : ' + latitude + '<br/>' + 'Longitude : ' + longitude);
  },
  // on failed
  function(error) {
    switch(error.code) {
      case 1:
      alert('Location permission denied.');
      break;
      case 2:
      alert('The current position could not be acquired.');
      break;
      case 3:
      alert('Timeout');
      break;
      default:
      alert('Other error error code :' + error.code);
      break;
    }
  }
  );
}
