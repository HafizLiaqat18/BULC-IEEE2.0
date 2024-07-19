const screenWidth = window.innerWidth;

const glide = new Glide(".glide", {
  type: "carousel",
  startAt: 0,
  peek: screenWidth > 600 ? 100 : 0,
  autoplay: 5000,
  animationTimingFunc: "ease-in-out",
});

glide.mount();
