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
    1230: {
      slidesPerView: 4,
    },
    1180: {
      slidesPerView: 3,
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
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
    },
    375: {
      slidesPerView: 1,
    },
  },
});

new Swiper('.preview-card__slider', {
  navigation: {
    prevEl: '.slider__btn-prev--4',
    nextEl: '.slider__btn-next--4',
  },
  thumbs: {
    swiper: '.preview-card__slider-2',
  },
});

new Swiper('.preview-card__slider-2', {
  spaceBetween: 25,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
  navigation: {
    prevEl: '.slider__btn-prev--4',
    nextEl: '.slider__btn-next--4',
  },
});

if (window.innerWidth <= 910) {
  new Swiper('.tabs__slider', {
    slidesPerView: 1.7,
    breakpoints: {
      768: {
        slidesPerView: 3,
      },
      590: {
        slidesPerView: 3,
      },
      375: {
        slidesPerView: 2,
      }
    },
    uniqueNavElements: false,
    navigation: {
      prevEl: '.slider__btn-prev--5',
      nextEl: '.slider__btn-next--5',
    },
  });
}
