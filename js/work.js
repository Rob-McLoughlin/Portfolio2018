var hoverBanner = function(i) {
  // Sets highlight image to thumbnail image
  var imgSelect = i.children[0].src;
  var workHighlight = document.getElementById('work-highlight')
  workHighlight.style.backgroundImage = "url(" + imgSelect + ")";

  // Sets highlight text to thumbnail text
  var workHighlightText = workHighlight.children[0]
  var textSelect = i.children[1].textContent;
  workHighlightText.textContent = textSelect;
}



// Function that adds a delay to the fadeIn animation of the work thumbnails
var delayAnimationWorkGrid = function() {
  var workThumbs = document.getElementsByClassName('thumbnail-container');
  for (i = 1; i < workThumbs.length; i++) {
    workThumbs[i].style.animationDelay = (i / 10) + "s"
  }
}

delayAnimationWorkGrid();
