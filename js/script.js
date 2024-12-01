let currentSlide = 0;

function moveSlide(direction) {
  const slides = document.querySelectorAll('.carousel-item');
  const totalSlides = slides.length;

  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
  const newTransform = -currentSlide * 100;
  document.querySelector('.carousel-container').style.transform = `translateX(${newTransform}%)`;
}

const swiper = new Swiper('.swiper', {
    loop: true, // Enables infinite looping
    slidesPerView: 1, // Default slides per view
    spaceBetween: 10, // Space between slides
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      // Adjust slides per view based on screen width
      640: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
  });