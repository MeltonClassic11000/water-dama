

// Initialize carousel with pause on hover
        document.addEventListener('DOMContentLoaded', function() {
            var heroCarousel = document.getElementById('heroCarousel');
            if (heroCarousel) {
                var carousel = new bootstrap.Carousel(heroCarousel, {
                    pause: "hover",
                    wrap: true
                });
            }
        });


  document.addEventListener('DOMContentLoaded', function () {
    if (window.innerWidth >= 992) {
      const dropdown = document.querySelector('.nav-item.dropdown');
      dropdown.addEventListener('mouseenter', function () {
        const menu = this.querySelector('.dropdown-menu');
        const bsDropdown = bootstrap.Dropdown.getOrCreateInstance(this.querySelector('.dropdown-toggle'));
        bsDropdown.show();
      });
      dropdown.addEventListener('mouseleave', function () {
        const bsDropdown = bootstrap.Dropdown.getOrCreateInstance(this.querySelector('.dropdown-toggle'));
        bsDropdown.hide();
      });
    }
  });


document.querySelectorAll('.dropdown-submenu > a').forEach(function(el) {
    el.addEventListener('click', function(e) {
      if (window.innerWidth < 992) {
        e.preventDefault();
        const submenu = el.nextElementSibling;
        submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
      }
    });
  });


  //     const hero = document.getElementById('heroSlider');

  // const backgrounds = [
  //   'url("assets/hero-slider-bg1.webp")',
  //   'url("assets/hero-slider-bg3.webp")',
  //   'url("assets/banner-bg-1.webp")'
  // ];

  // let index = 0;

  // function slideBackground() {
  //   hero.style.backgroundImage = backgrounds[index];
  //   index = (index + 1) % backgrounds.length;
  // }

  // // Start the slider
  // slideBackground();
  // setInterval(slideBackground, 5000);

  document.addEventListener("DOMContentLoaded", function () {
  const hero = document.getElementById('heroSlider');

  if (!hero) return; // Stop if element doesn't exist

  const backgrounds = [
    'url("assets/hero-slider-bg1.webp")',
    'url("assets/hero-slider-bg3.webp")',
    'url("assets/banner-bg-1.webp")'
  ];

  let index = 0;

  const slideBackground = () => {
    hero.style.backgroundImage = backgrounds[index];
    index = (index + 1) % backgrounds.length;
  };

  // Optional: Add smooth transition via JS
  hero.style.transition = 'background-image 1s ease-in-out';

  // Initial set
  slideBackground();

  // Change every 5 seconds
  setInterval(slideBackground, 5000);
});



  $(document).ready(function(){
    $('.testimonial-slider').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      arrows: false,
      dots: false,
      responsive: [
        {
          breakpoint: 992, // tablets
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 768, // phones
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  });



// const images = document.querySelectorAll('.img-item img');
// const lightbox = document.getElementById('lightbox');
// const lightboxImg = document.querySelector('.lightbox-img');
// const closeBtn = document.querySelector('.close');
// const prevBtn = document.querySelector('.prev');
// const nextBtn = document.querySelector('.next');

// let currentIndex = 0;

// function showLightbox(index) {
//   currentIndex = index;
//   lightboxImg.src = images[currentIndex].src;
//   lightbox.style.display = 'flex';
// }

// images.forEach((img, index) => {
//   img.addEventListener('click', () => showLightbox(index));
// });

// closeBtn.addEventListener('click', () => {
//   lightbox.style.display = 'none';
// });

// prevBtn.addEventListener('click', () => {
//   currentIndex = (currentIndex - 1 + images.length) % images.length;
//   lightboxImg.src = images[currentIndex].src;
// });

// nextBtn.addEventListener('click', () => {
//   currentIndex = (currentIndex + 1) % images.length;
//   lightboxImg.src = images[currentIndex].src;
// });

// // Optional: Close on outside click
// lightbox.addEventListener('click', (e) => {
//   if (e.target === lightbox) lightbox.style.display = 'none';
// });


document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll('.img-item img');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.querySelector('.lightbox-img');
  const closeBtn = document.querySelector('.close');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');

  let currentIndex = 0;

  if (!images.length || !lightbox || !lightboxImg) return;

  const updateLightboxImage = () => {
    lightboxImg.src = images[currentIndex].src;
  };

  const showLightbox = (index) => {
    currentIndex = index;
    updateLightboxImage();
    lightbox.style.display = 'flex';
  };

  images.forEach((img, index) => {
    img.addEventListener('click', () => showLightbox(index));
  });

  closeBtn?.addEventListener('click', () => {
    lightbox.style.display = 'none';
  });

  prevBtn?.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent closing lightbox on btn click
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateLightboxImage();
  });

  nextBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    currentIndex = (currentIndex + 1) % images.length;
    updateLightboxImage();
  });

  // Close when clicking outside the image
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = 'none';
    }
  });
});
