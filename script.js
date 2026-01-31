gsap.from("nav", {
  y: -100,
  opacity: 0,
  duration: 1
});

gsap.from(".title", {
  x: -200,
  opacity: 0,
  duration: 1,
  delay: 0.5
});

gsap.from(".subtitle", {
  x: 200,
  opacity: 0,
  duration: 1,
  delay: 0.7
});

gsap.from(".btn", {
  scale: 0,
  opacity: 0,
  duration: 0.8,
  delay: 1
});

gsap.from(".card", {
  y: 100,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
  scrollTrigger: ".projects"
});
