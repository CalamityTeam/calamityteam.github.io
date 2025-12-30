document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.querySelector(".carousel-container");
  const track = document.querySelector(".carousel-track");
  const slides = document.querySelectorAll(".carousel-slide");
  const prevBtn = document.querySelector(".carousel-prev");
  const nextBtn = document.querySelector(".carousel-next");
  const dotsContainer = document.querySelector(".carousel-dots");
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.querySelector(".lightbox-img");
  const lightboxClose = document.querySelector(".lightbox-close");
  const lightboxPrev = document.querySelector(".lightbox-prev");
  const lightboxNext = document.querySelector(".lightbox-next");

  if (!carousel || !track || slides.length === 0) return;

  let currentIndex = 0;
  let lightboxIndex = 0;

  function parseCSSValue(value, fallback) {
    if (!value || value === "") return fallback;
    const trimmed = value.trim();
    if (trimmed.endsWith("vw")) {
      return (parseFloat(trimmed) / 100) * window.innerWidth;
    }
    return parseFloat(trimmed) || fallback;
  }

  function getSizes() {
    const containerStyle = getComputedStyle(carousel);
    const trackStyle = getComputedStyle(track);

    const slideWidth = parseCSSValue(
      containerStyle.getPropertyValue("--slide-width"),
      250
    );
    const activeWidth = parseCSSValue(
      containerStyle.getPropertyValue("--active-width"),
      700
    );
    const gap = parseFloat(trackStyle.gap) || 20;

    return { slideWidth, activeWidth, gap };
  }

  function createDots() {
    dotsContainer.innerHTML = "";
    slides.forEach((_, i) => {
      const dot = document.createElement("button");
      dot.classList.add("carousel-dot");
      if (i === currentIndex) dot.classList.add("active");
      dot.setAttribute("aria-label", `Go to slide ${i + 1}`);
      dot.addEventListener("click", () => goToSlide(i));
      dotsContainer.appendChild(dot);
    });
  }

  function updateCarousel() {
    slides.forEach((slide, i) => {
      slide.classList.remove("active", "adjacent");

      if (i === currentIndex) {
        slide.classList.add("active");
      } else if (i === currentIndex - 1 || i === currentIndex + 1) {
        slide.classList.add("adjacent");
      }
    });

    const { slideWidth, activeWidth, gap } = getSizes();
    let offset = currentIndex * (slideWidth + gap) + activeWidth / 2;

    track.style.transform = `translate(-${offset}px, -50%)`;

    document.querySelectorAll(".carousel-dot").forEach((dot, i) => {
      dot.classList.toggle("active", i === currentIndex);
    });

    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex >= slides.length - 1;
  }

  function goToSlide(index) {
    currentIndex = Math.max(0, Math.min(index, slides.length - 1));
    updateCarousel();
  }

  function nextSlide() {
    if (currentIndex < slides.length - 1) {
      currentIndex++;
      updateCarousel();
    }
  }

  function prevSlide() {
    if (currentIndex > 0) {
      currentIndex--;
      updateCarousel();
    }
  }

  prevBtn.addEventListener("click", prevSlide);
  nextBtn.addEventListener("click", nextSlide);

  let resizeTimeout;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(updateCarousel, 100);
  });

  slides.forEach((slide, i) => {
    slide.addEventListener("click", () => {
      if (slide.classList.contains("active")) {
        openLightbox(i);
      } else {
        goToSlide(i);
      }
    });
  });

  document.addEventListener("keydown", (e) => {
    if (lightbox && lightbox.classList.contains("active")) return; // Let lightbox handle it
    if (e.key === "ArrowLeft") prevSlide();
    if (e.key === "ArrowRight") nextSlide();
  });

  let touchStartX = 0;
  let touchEndX = 0;

  carousel.addEventListener(
    "touchstart",
    (e) => {
      touchStartX = e.changedTouches[0].screenX;
    },
    { passive: true }
  );

  carousel.addEventListener(
    "touchend",
    (e) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    },
    { passive: true }
  );

  function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }
  }

  function openLightbox(index) {
    if (!lightbox) return;
    lightboxIndex = index;
    const img = slides[index].querySelector("img");
    if (img) {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
    }
    lightbox.classList.add("active");
    document.body.style.overflow = "hidden";
    updateLightboxNav();
  }

  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove("active");
    document.body.style.overflow = "";
  }

  function lightboxNavPrev() {
    if (lightboxIndex > 0) {
      lightboxIndex--;
      const img = slides[lightboxIndex].querySelector("img");
      if (img) {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
      }
      updateLightboxNav();
    }
  }

  function lightboxNavNext() {
    if (lightboxIndex < slides.length - 1) {
      lightboxIndex++;
      const img = slides[lightboxIndex].querySelector("img");
      if (img) {
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
      }
      updateLightboxNav();
    }
  }

  function updateLightboxNav() {
    if (lightboxPrev)
      lightboxPrev.style.opacity = lightboxIndex === 0 ? "0.3" : "1";
    if (lightboxNext)
      lightboxNext.style.opacity =
        lightboxIndex === slides.length - 1 ? "0.3" : "1";
  }

  if (lightbox) {
    lightboxClose?.addEventListener("click", closeLightbox);
    lightboxPrev?.addEventListener("click", lightboxNavPrev);
    lightboxNext?.addEventListener("click", lightboxNavNext);

    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener("keydown", (e) => {
      if (!lightbox.classList.contains("active")) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") lightboxNavPrev();
      if (e.key === "ArrowRight") lightboxNavNext();
    });
  }

  // Initialize
  createDots();
  updateCarousel();
});
