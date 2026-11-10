// Highlights the "On this page" link for the section currently in view. The links work without this script.
// support.js renders the page after load and replaces the raw template, so elements are looked up on each update.
(function () {
  function update() {
    var links = document.querySelectorAll('.case-aside .toc-link');
    var current = null;
    links.forEach(function (a) {
      var t = document.getElementById(a.getAttribute('href').slice(1));
      if (t && t.getBoundingClientRect().top <= 140) current = a;
    });
    links.forEach(function (a) {
      if (a === current) a.setAttribute('aria-current', 'location');
      else a.removeAttribute('aria-current');
    });
  }
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('hashchange', update);
  window.addEventListener('load', function () { setTimeout(update, 300); });
})();
