let lastScroll = 0;
const header = document.getElementById("stickyHeader");

window.addEventListener("scroll", () => {
  let currentScroll = window.pageYOffset;

  if (currentScroll > window.innerHeight / 2) {
    if (currentScroll > lastScroll) {
      header.classList.remove("active");
    } else {
      header.classList.add("active");
    }
  } else {
    header.classList.remove("active");
  }

  lastScroll = currentScroll;
});

const track = document.querySelector(".carousel-track");
const items = document.querySelectorAll(".carousel-item");
let index = 0;

document.querySelector(".next").addEventListener("click", () => {
  index++;
  if (index >= items.length) index = 0;
  updateCarousel();
});

document.querySelector(".prev").addEventListener("click", () => {
  index--;
  if (index < 0) index = items.length - 1;
  updateCarousel();
});

function updateCarousel() {
  track.style.transform = `translateX(-${index * 320}px)`;
}

const zoomPreview = document.getElementById("zoomPreview");

document.querySelectorAll(".carousel-item img").forEach(img => {
  img.addEventListener("mouseenter", () => {
    zoomPreview.style.display = "block";
    zoomPreview.style.backgroundImage = `url(${img.src})`;
  });

  img.addEventListener("mouseleave", () => {
    zoomPreview.style.display = "none";
  });
});
