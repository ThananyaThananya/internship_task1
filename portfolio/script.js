window.addEventListener("DOMContentLoaded", () => {
  gsap.to(".fade-in", {
    opacity: 1,
    y: 0,
    duration: 1,
    stagger: 0.2,
    ease: "power2.out"
  });

  gsap.to(".slide-up", {
    scrollTrigger: {
      trigger: ".slide-up",
      start: "top 80%"
    },
    opacity: 1,
    y: 0,
    duration: 1,
    stagger: 0.3,
    ease: "power2.out"
  });
});
