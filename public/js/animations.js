/* public/js/animations.js */
(function () {
  "use strict";

  /* ── Hero Slider ── */
  const slides = document.querySelectorAll(".slide");
  let current = 0,
    timer;

  function goTo(index) {
    slides[current].classList.remove("active");
    current = (index + slides.length) % slides.length;
    slides[current].classList.add("active");
  }

  function next() {
    goTo(current + 1);
  }
  function prev() {
    goTo(current - 1);
  }

  function startAuto() {
    clearInterval(timer);
    timer = setInterval(next, 5000);
  }

  if (slides.length > 1) {
    const hero = document.querySelector(".hero");

    const btnPrev = document.createElement("button");
    btnPrev.className = "slider-btn prev";
    btnPrev.setAttribute("aria-label", "Previous slide");
    btnPrev.innerHTML = "&#8249;";

    const btnNext = document.createElement("button");
    btnNext.className = "slider-btn next";
    btnNext.setAttribute("aria-label", "Next slide");
    btnNext.innerHTML = "&#8250;";

    hero.appendChild(btnPrev);
    hero.appendChild(btnNext);

    btnPrev.addEventListener("click", function () {
      prev();
      startAuto();
    });
    btnNext.addEventListener("click", function () {
      next();
      startAuto();
    });

    startAuto();
  }

  /* ── Scroll Reveal ── */
  //const revealEls = document.querySelectorAll(
  //  ".card, .testimonial, .hero-content, .cta, section h2"
  //  );
  const revealEls = document.querySelectorAll(
    ".card, .testimonial, .hero-content, .cta, section h2, .service-item, .highlight-item, .contact-block, .faq-item",
  );

  revealEls.forEach(function (el) {
    el.classList.add("reveal");
  });

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );

  revealEls.forEach(function (el) {
    observer.observe(el);
  });
})();
