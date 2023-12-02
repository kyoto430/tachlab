console.log('slider running...');

new Swiper('.trust__slider', {
  loop: true,
  navigation: {
    prevEl: '.slider__btn-prev--1',
    nextEl: '.slider__btn-next--1',
  },
  uniqueNavElements: false,
  breakpoints: {
    1920: {
      slidesPerView: 4,
    },
    1280: {
      slidesPerView: 4,
    },
    1230: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    375: {
      slidesPerView: 1,
    },
  },
});

new Swiper('.preview__slider', {
  loop: true,
  navigation: {
    prevEl: '.slider__btn-prev--2',
    nextEl: '.slider__btn-next--2',
  },
  uniqueNavElements: false,
});

new Swiper('.likes__slider', {
  loop: true,
  navigation: {
    prevEl: '.slider__btn-prev--3',
    nextEl: '.slider__btn-next--3',
  },
  uniqueNavElements: false,
  breakpoints: {
    1920: {
      slidesPerView: 4,
    },
    1280: {
      slidesPerView: 4,
    },
    1230: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    375: {
      slidesPerView: 1,
    },
  },
});
