var setSquare = function(e) {
  var width = e.offsetWidth;
  e.style.minHeight = width + 'px';
}
var setSquareSmall = function(e) {
  var width = e.offsetWidth;
  e.style.height = width + 'px';
}

if (window.innerWidth < 420){
  var homeSquare = document.getElementById('home-card');
  setSquareSmall(homeSquare);
} else if (window.innerWidth < 769){

} else if (window.innerWidth >= 1440 || window.innerWidth < 1024){
var homeSquare = document.getElementById('home-card');
setSquare(homeSquare);
}
