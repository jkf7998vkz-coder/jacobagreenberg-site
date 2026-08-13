(function () {
  var header = document.querySelector('.site-header');
  var hero = document.querySelector('[data-hero]');
  if (header && hero) {
    var update = function () {
      var heroBottom = hero.getBoundingClientRect().bottom;
      header.classList.toggle('revealed', heroBottom <= 0);
    };
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    update();
  }

  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.site-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }
})();
