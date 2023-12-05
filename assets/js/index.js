console.log('js running...');

// Меню бургер
function burger() {
  const burgerBtn = document.querySelector('.menu__burger');
  const menu = document.querySelector('.main__nav');
  const menuLinks = document.querySelectorAll('.menu__link');
  const overlay = document.querySelector('.overlay');

  burgerBtn.addEventListener('click', function () {
    document.body.classList.toggle('lock');
    burgerBtn.classList.toggle('active');
    menu.classList.toggle('active');
    overlay.classList.toggle('active');
  });

  menuLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      document.body.classList.remove('lock');
      burgerBtn.classList.remove('active');
      menu.classList.remove('active');
      overlay.classList.remove('active');
    });
  });

  document.addEventListener('click', function (event) {
    if (!menu.contains(event.target) && !burgerBtn.contains(event.target)) {
      document.body.classList.remove('lock');
      burgerBtn.classList.remove('active');
      menu.classList.remove('active');
      overlay.classList.remove('active');
    }
  });
}

burger();

function showAll() {
  document.addEventListener('DOMContentLoaded', function () {
    const showMoreButton = document.querySelectorAll('.btn-show');
    const hiddenElements = document.querySelectorAll('.block-hidden');
    const opacityElements = document.querySelectorAll('.seo__inner-2');

    showMoreButton.forEach(function (el) {
      el.addEventListener('click', function () {
        hiddenElements.forEach(function (element) {
          if (element.style.transform !== 'scale(1)') {
            opacityElements.forEach(function (el) {
              el.style.opacity = '1';
            });
            element.style.position = 'initial';
            element.style.transform = 'scale(1)';
            el.innerText = 'Скрыть';
          } else {
            opacityElements.forEach(function (el) {
              el.style.opacity = '0.3';
            });
            element.style.position = 'absolute';
            element.style.transform = 'scale(0)';
            el.innerText = 'Показать больше';
          }
        });
      });
    });
  });
}

showAll();

function scrollTab(clickedTab) {
  // Убрать класс 'active' у всех табов
  const allTabs = document.querySelectorAll('.tab');
  allTabs.forEach((tab) => {
    tab.classList.remove('props-active');
  });

  // Добавить класс 'active' к выбранному табу
  clickedTab.classList.add('props-active');
}

function hideBlocks() {
  const elements = document.querySelectorAll('.catalog-preview__card');
  if (window.innerWidth <= 1180) {
    for (let i = 4; i < elements.length; i += 1) {
      elements[i].classList.add('block-hidden');
    }
  }
}

hideBlocks();

function increment(elementId) {
  const counterElement = document.getElementById(elementId);
  let counterValue = parseInt(counterElement.textContent);
  counterValue++;
  counterElement.textContent = counterValue;
}

function decrement(elementId) {
  const counterElement = document.getElementById(elementId);
  let counterValue = parseInt(counterElement.textContent);
  if (counterValue >= 1) {
    counterValue--;
  }
  counterElement.textContent = counterValue;
}
