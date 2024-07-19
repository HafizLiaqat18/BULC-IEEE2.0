const zoom = document.querySelector(".zoom");
const zoomBg = document.querySelector(".zoom__bg");
const zoomClose = document.querySelector(".zoom__close");
const zoomContent = document.querySelector(".zoom__content");
const zoomImg = document.querySelector(".zoom__img");
const images = document.querySelectorAll(".gallery__img");

let toggleZoom = false;

const onZoom = (e) => {
  const zoomContentRect = zoomContent.getBoundingClientRect();
  const x = e.clientX - zoomContentRect.left;
  const y = e.clientY - zoomContentRect.top;
  zoomImg.style.transformOrigin = `${x}px ${y}px`;
  zoomImg.style.transform = "scale(2.5)";
  zoomImg.style.cursor = "zoom-out";
};

const offZoom = (e) => {
  zoomImg.style.transformOrigin = `center center`;
  zoomImg.style.transform = "scale(1)";
  zoomImg.style.cursor = "zoom-in";
};

const addZoomEffect = (e) => {
  onZoom(e);
  zoomContent.addEventListener("mousemove", onZoom);
  zoomContent.addEventListener("mouseover", onZoom);
  zoomContent.addEventListener("mouseleave", offZoom);
};

const removeZoomEffect = () => {
  toggleZoom = false;
  offZoom();
  zoomContent.removeEventListener("mousemove", onZoom);
  zoomContent.removeEventListener("mouseover", onZoom);
  zoomContent.removeEventListener("mouseleave", offZoom);
};

for (let i = 0; i < images.length; i++) {
  const img = images[i];
  img.addEventListener("click", () => {
    zoomImg.src = img.src;
    zoom.style.top = `${window.scrollY}px`;
    zoom.classList.add("zoom--show");
    body.classList.add("body--no-scroll");
  });
}

[zoomBg, zoomClose].forEach((elem) => {
  elem.addEventListener("click", () => {
    zoom.classList.remove("zoom--show");
    body.classList.remove("body--no-scroll");
    removeZoomEffect();
  });
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    zoom.classList.remove("zoom--show");
    body.classList.remove("body--no-scroll");
    removeZoomEffect();
  }
});

zoomImg.addEventListener("click", (e) => {
  toggleZoom = !toggleZoom;

  if (toggleZoom) {
    addZoomEffect(e);
  } else {
    removeZoomEffect();
  }
});
