    //root
    //The element that is used as the viewport for checking visiblity of the target.
    // Must be the ancestor of the target. Defaults to the browser viewport if not specified or if null.

var options = {
    root: document.querySelector('#scrollArea'),
    rootMargin: '0px',
    threshold: 1.0
  }

  var observer = new IntersectionObserver(callback, options);