var setSquare = function(e) {
  const width = e.offsetWidth;
  e.style.height = width + 'px';
}
const homeSquare = document.getElementById('home-card');

if (window.location.pathname === '/index.html' || window.location.pathname == '/') {
  setSquare(homeSquare);
}

var hoverBanner = function(i) {
  // Sets highlight image to thumbnail image
  let imgSelect = i.children[0].src;
  const workHighlight = document.getElementById('work-highlight')
  workHighlight.style.backgroundImage = "url(" + imgSelect + ")";

  // Sets highlight text to thumbnail text
  const workHighlightText = workHighlight.children[0]
  let textSelect = i.children[1].textContent;
  workHighlightText.textContent = textSelect;
}


// Function that adds a delay to the fadeIn animation of the work thumbnails
var delayAnimationWorkGrid = function() {
  var workThumbs = document.getElementsByClassName('thumbnail-container');
  for (i = 1; i < workThumbs.length; i++) {
    workThumbs[i].style.animationDelay = (i / 10) + "s"
  }
}

if (window.location.pathname === '/work.html') {
  delayAnimationWorkGrid();
}

// Create pager thing on work images
var createPager = function() {
  var gallery = document.getElementsByTagName('img')
  var images = gallery.length
  var pager = document.getElementById('pager')
  for (i = 1; i < images; i++) {
    var dot = document.createElement("li")
    pager.appendChild(dot)
  }
  // Set first dot as active
  pager.children[0].className += 'active';
}
if (window.location.pathname !=='/work.html' && window.location.pathname !=='/index.html' && window.location.pathname !=='/' && window.location.pathname !== '/about.html') {
  // delayAnimationWorkGrid();
  createPager()
}

// checks which section is in the middle of the page and makes the corresponding image active
var checkSection = function() {

  var windowMiddle = window.innerHeight / 2;
  // A lil offset just so it isn't exactly the middle line, adds "padding" of gate to either side
  var gate = 24
  var sections = document.querySelectorAll('.work-text section')
  for (i = 0; i < sections.length; i++) {
    // Gets top and bottom of each section
    let sectionHeight = Math.round(sections[i].offsetHeight)
    let rect = sections[i].getBoundingClientRect();
    let sectionTop = Math.round(rect.top)
    let sectionBottom = Math.round(sectionTop + sectionHeight)


    // Check if element top is above the window mid point and element bottom is below the window midpoint
    if (sectionTop < (windowMiddle + gate) && sectionBottom > (windowMiddle + gate)) {
      // Creates an array of work images
      var workImages = [].slice.call(document.querySelectorAll(".work-imgs img"));
      var cloneArray = workImages.slice();
      cloneArray.splice(i, 1);
      workImages[i].classList.add('active-work-img');
      // Remove class if not current array item
      cloneArray.forEach(function(element) {
        element.classList.remove('active-work-img')
      });

      // Change Pager
      var pager = [].slice.call(document.querySelectorAll("ul#pager li"));
      var cloneArrayPager = pager.slice();
      cloneArrayPager.splice(i, 1);
      pager[i].classList.add('active');
      // Remove class if not current array item
      cloneArrayPager.forEach(function(element) {
        element.classList.remove('active')
      });
    } else if (window.pageYOffset < 5){
      workImages[0].classList.add('active');
    }
  }
}
// Run on scroll
if (window.innerWidth > 769) {
  window.onscroll = function() {
    checkSection();
  }
  // Run on load
  checkSection();
};

// Full Screen Images
var galleryContainer = document.getElementById('gallery-container')
var fullscreen = function(){
  var nav = document.getElementById('nav')
  nav.classList.toggle('light-nav')
  galleryContainer.classList.toggle('fullscreen')

}
galleryContainer.addEventListener("click", fullscreen);

// Takes image from the gallery and appends it to under the corresponding section on tablet/mobile
var shiftImages = function() {
  var sections = document.querySelectorAll('.work-text section')
  var workImages = [].slice.call(document.querySelectorAll(".work-imgs img"));
  var cloneArray = workImages.slice();
  for (i = 0; i < cloneArray.length; i++) {
    sections[i].appendChild(cloneArray[i]);
  }
}

if (window.innerWidth < 769) {
  shiftImages()
};

var mobileNav = function(el) {
  // document.title = window.scrollY;
  var lastScrollTop = 0;
  // element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
  window.addEventListener("scroll", function() { // or window.addEventListener("scroll"....
    var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    if (st > lastScrollTop && st > 10) {
      // downscroll code
      if (el.classList)
        el.classList.add('scroll');
      else
        el.className += ' ' + 'scroll';
    } else {
      // upscroll code
      if (el.classList)
        el.classList.remove('scroll');
      else
        el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
    lastScrollTop = st;
  }, false);
}

if (window.innerWidth < 468) {

  var navigation = document.getElementById('nav');
  console.log(navigation)
  mobileNav(navigation)
};
