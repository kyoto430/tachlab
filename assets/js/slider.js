console.log('slider running...');

new Swiper('.custom__slider', {
  loop: true,
  // pagination: {
  //   el: '.s__p--3',
  //   clickable: true,
  // },
  navigation: {
    prevEl: '.slider__btn-prev',
    nextEl: '.slider__btn-next',
  },
  uniqueNavElements: false,
  breakpoints: {
    1920: {
      slidesPerView: 1,
    },
    1280: {
      slidesPerView: 1,
    },
    1230: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    375: {
      slidesPerView: 1,
    },
  },
});
