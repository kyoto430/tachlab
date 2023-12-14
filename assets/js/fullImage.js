// Full image
Fancybox.bind('[data-fancybox]', {});

document.addEventListener('DOMContentLoaded', function () {
  window.addEventListener('scroll', function () {
    const content = document.querySelector('.main');
    const cardButtons = document.querySelector(
      '.catalog__card-buttons--preview'
    );

    if (window.scrollY >= content.offsetTop) {
      cardButtons.classList.add('fixed');
    } else {
      cardButtons.classList.remove('fixed');
    }
  });
});



