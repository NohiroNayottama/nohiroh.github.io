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

gsap.to("#bio img", {
  opacity: 0,
  x: -50,
  scrollTrigger: {
    trigger: "#bio",
    start: "top center",
    end: "bottom center",
    scrub: true,
  },
});

gsap.to("#bio p", {
  opacity: 0,
  x: 50,
  scrollTrigger: {
    trigger: "#bio",
    start: "top center",
    end: "bottom center",
    scrub: true,
  },
});
