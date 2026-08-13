(function () {
  var header = document.querySelector('.site-header');
  var hero = document.querySelector('[data-hero]');
  if (!header || !hero) return;

  function update() {
    var heroBottom = hero.getBoundingClientRect().bottom;
    header.classList.toggle('revealed', heroBottom <= 0);
  }

  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update);
  update();
})();
