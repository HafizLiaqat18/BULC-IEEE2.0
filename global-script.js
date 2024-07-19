const body = document.querySelector("body");
const content = document.querySelector(".content");
const footer = document.querySelector(".footer");
const nav = document.querySelector(".header__nav");
const links = document.querySelectorAll(".header__link");
const scrollTop = document.querySelector(".scroll-top");
const menu = document.querySelector(".menu");

content.style.minHeight = `calc(100vh - ${getComputedStyle(footer).height})`;
console.log(getComputedStyle(footer).height);

if (window.innerWidth < 600) {
  nav.classList.add("glassy-effect");

  for (let i = 0; i < links.length; i++) {
    const link = links[i];
    link.classList.add("glassy-effect");
  }
}

window.addEventListener("scroll", () => {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    scrollTop.classList.add("scroll-top--show");
  } else {
    scrollTop.classList.remove("scroll-top--show");
  }
});

scrollTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

menu.addEventListener("click", () => {
  nav.classList.toggle("header__nav--show");
  menu.classList.toggle("menu--active");
  menu.classList.toggle("glassy-effect");
  body.classList.toggle("body--no-scroll");
});
