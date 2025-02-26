gsap.to("#landing h1", {
  opacity: 0,
  y: -50,
  scrollTrigger: {
    trigger: "#landing",
    start: "top top",
    end: "bottom top",
    scrub: true,
  },
});

gsap.to("#landing img", {
  opacity: 0,
  y: -50,
  scrollTrigger: {
    trigger: "#landing",
    start: "top top",
    end: "bottom top",
    scrub: true,
  },
});
