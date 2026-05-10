// main script
(function () {
  "use strict";

  // Header shrink on scroll
  (function () {
    var header = document.getElementById("site-header");
    if (!header) return;
    // only enable shrink behavior when navbar_fixed param is true
    var navbarFixed = header.dataset && header.dataset.navbarFixed === "true";
    if (!navbarFixed) return;
    var lastKnownScrollY = 0;
    var ticking = false;
    var threshold = 20;

    function onScroll() {
      lastKnownScrollY = window.scrollY || window.pageYOffset;
      requestTick();
    }

    function requestTick() {
      if (!ticking) {
        requestAnimationFrame(update);
      }
      ticking = true;
    }

    function update() {
      if (lastKnownScrollY > threshold) {
        header.classList.add("py-2", "lg:py-3", "shadow-lg");
        header.classList.remove("py-6", "lg:py-6");
      } else {
        header.classList.remove("py-2", "lg:py-3", "shadow-lg");
        header.classList.add("py-6", "lg:py-6");
      }
      ticking = false;
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    // run on init
    update();
  })();
})();
