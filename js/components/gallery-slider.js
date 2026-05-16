// =============================
// Fade Gallery Animation
// =============================

const gallerySlides = document.querySelectorAll(".gallery-slide");
const galleryNextBtn = document.querySelector(".gallery-btn-next");
const galleryPrevBtn = document.querySelector(".gallery-btn-prev");
const galleryDotsContainer = document.querySelector(".gallery-dots");

let galleryCurrentIndex = 0;
let galleryAutoPlay;

// Create dots automatically
gallerySlides.forEach((slide, index) => {
  const dot = document.createElement("button");
  dot.classList.add("gallery-dot");
  dot.setAttribute("type", "button");
  dot.setAttribute("aria-label", `Go to gallery image ${index + 1}`);

  if (index === 0) {
    dot.classList.add("active");
  }

  dot.addEventListener("click", () => {
    showGallerySlide(index);
    restartGalleryAutoPlay();
  });

  galleryDotsContainer.appendChild(dot);
});

const galleryDots = document.querySelectorAll(".gallery-dot");

function showGallerySlide(index) {
  gallerySlides.forEach((slide) => {
    slide.classList.remove("active");
  });

  galleryDots.forEach((dot) => {
    dot.classList.remove("active");
  });

  gallerySlides[index].classList.add("active");
  galleryDots[index].classList.add("active");

  galleryCurrentIndex = index;
}

function showNextGallerySlide() {
  const nextIndex = (galleryCurrentIndex + 1) % gallerySlides.length;
  showGallerySlide(nextIndex);
}

function showPrevGallerySlide() {
  const prevIndex =
    (galleryCurrentIndex - 1 + gallerySlides.length) % gallerySlides.length;

  showGallerySlide(prevIndex);
}

galleryNextBtn.addEventListener("click", () => {
  showNextGallerySlide();
  restartGalleryAutoPlay();
});

galleryPrevBtn.addEventListener("click", () => {
  showPrevGallerySlide();
  restartGalleryAutoPlay();
});

// Auto fade every 4 seconds
function startGalleryAutoPlay() {
  galleryAutoPlay = setInterval(() => {
    showNextGallerySlide();
  }, 4000);
}

function stopGalleryAutoPlay() {
  clearInterval(galleryAutoPlay);
}

function restartGalleryAutoPlay() {
  stopGalleryAutoPlay();
  startGalleryAutoPlay();
}

startGalleryAutoPlay();