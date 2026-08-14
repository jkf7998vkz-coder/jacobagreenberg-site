(function () {
  var header = document.querySelector('.site-header');
  var hero = document.querySelector('[data-hero]');
  if (header && hero) {
    // Reveal once scrolled past whichever is smallest: the hero's own height, a fixed cap,
    // or the page's actual max scroll distance. Waiting for the entire hero to scroll out
    // of view broke on pages whose content isn't long enough to ever scroll that far (short
    // pages could fall short of even the 400px cap too).
    var update = function () {
      var maxScroll = Math.max(document.body.scrollHeight - window.innerHeight, 1);
      var threshold = Math.min(hero.offsetHeight, 400, maxScroll);
      var scrolledPast = -hero.getBoundingClientRect().top;
      header.classList.toggle('revealed', scrolledPast >= threshold);
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
