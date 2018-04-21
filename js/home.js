var setSquare = function(e) {
  var width = e.offsetWidth;
  e.style.height = width + 'px';
}
var homeSquare = document.getElementById('home-card');

setSquare(homeSquare);
