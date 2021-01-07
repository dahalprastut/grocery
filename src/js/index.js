// $(document).ready(function () {
//   $(".owl-carousel").owlCarousel({
//     loop: true,
//     margin: 20,
//     responsiveClass: true,
//     nav: true,
//     dots: false,
//     responsive: {
//       0: {
//         items: 1,
//       },
//       600: {
//         items: 3,
//       },
//       1000: {
//         items: 4,
//       },
//     },
//   });
// });

var mySwiper = new Swiper(".swiper-container", {
  // Optional parameters
  // direction: "vertical",
  // loop: true,

  slidesPerView: 4,
  spaceBetween: 20,
  autoplay: {
    delay: 5000,
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    // when window width is >= 320px

    320: {
      slidesPerView: 1,
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
    },
  },
});
