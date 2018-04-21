var setSquare = function(e) {
  var width = e.offsetWidth;
  e.style.height = width + 'px';
}

if (window.innerWidth >= 1440 || window.innerWidth < 1024){
var homeSquare = document.getElementById('home-card');
setSquare(homeSquare);
console.log(12)
}
