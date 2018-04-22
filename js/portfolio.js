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
  mobileNav(navigation)
};
