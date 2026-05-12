const revealTargets = document.querySelectorAll(
  [
    "section > *",
    ".service-card",
    ".about-card",
    ".process-card",
    ".pricing-card",
    ".faq-item",
    ".contact-item",
    ".contact-form",
    ".map-wrapper",
    ".footer-container",
  ].join(","),
);

if ("IntersectionObserver" in window) {
  revealTargets.forEach((target, index) => {
    target.classList.add("scroll-reveal");
    target.style.setProperty("--reveal-delay", `${Math.min(index % 6, 5) * 70}ms`);
  });

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    {
      rootMargin: "0px 0px -12% 0px",
      threshold: 0.16,
    },
  );

  revealTargets.forEach((target) => revealObserver.observe(target));
} else {
  revealTargets.forEach((target) => target.classList.add("is-visible"));
}
