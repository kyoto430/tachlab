console.log('js running...');

function openSubMenus() {
  if (window.innerWidth <= 1180) {
    let arrows = document.querySelectorAll('.arrow');
    let backButton = document.querySelector('.menu__btn-back');
    arrows.forEach(function (element) {
      let subMenu = element.nextElementSibling;
      let menuLink = element.previousElementSibling;
      let arrowActive = element;
      element.addEventListener('click', function () {
        subMenu.classList.toggle('open-submenu');
        arrowActive.classList.toggle('arrow-active');
        backButton.classList.add('menu-visible');
        menuLink.classList.toggle('menu__link-active');
      });
      backButton.addEventListener('click', function () {
        subMenu.classList.remove('open-submenu');
        backButton.classList.remove('menu-visible');
        arrowActive.classList.remove('arrow-active');
        menuLink.classList.remove('menu__link-active');
      });
    });
  }
}

openSubMenus();

// Меню бургер
function burger() {
  const burgerBtn = document.querySelector('.menu__burger');
  const menu = document.querySelector('.main__nav-menu');
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
    const showMoreButtons = document.querySelectorAll('.btn-show');
    const showMoreSeoButton = document.querySelector('.seo__wrapper .btn-show');
    const hiddenElements = document.querySelectorAll('.block-hidden');
    const opacityElements = document.querySelectorAll('.seo__inner-2');
    const hiddenElementsMob = document.querySelectorAll('.block-hidden-mob');
    const opacityElementsMob = document.querySelectorAll('.block-opacity');

    showMoreButtons.forEach(function (el) {
      el.addEventListener('click', function () {
        hiddenElements.forEach(function (element) {
          if (element.style.transform !== 'scale(1)') {
            opacityElements.forEach(function (el) {
              el.style.opacity = '1';
            });
            element.style.position = 'initial';
            element.style.transform = 'scale(1)';
            el.innerText = 'Скрыть';
            showMoreSeoButton.style.marginTop = '0px';
          } else {
            opacityElements.forEach(function (el) {
              el.style.opacity = '0.3';
            });
            element.style.position = 'absolute';
            element.style.transform = 'scale(0)';
            el.innerText = 'Показать больше';
            showMoreSeoButton.style.marginTop = '-30px';
          }
        });
        if (window.innerWidth <= 768) {
          hiddenElementsMob.forEach(function (element) {
            if (element.style.transform !== 'scale(1)') {
              opacityElementsMob.forEach(function (el) {
                el.style.opacity = '1';
              });
              element.style.position = 'initial';
              element.style.transform = 'scale(1)';
            } else {
              opacityElementsMob.forEach(function (el) {
                el.style.opacity = '0.3';
              });
              element.style.position = 'absolute';
              element.style.transform = 'scale(0)';
            }
          });
        }
      });
    });
  });
}

showAll();

function scrollTab(clickedTab) {
  const allTabs = document.querySelectorAll('.tab');
  allTabs.forEach((tab) => {
    tab.classList.remove('props-active');
  });
  clickedTab.classList.add('props-active');
}

function hideBlocks() {
  const catalogPreviewCards = document.querySelectorAll(
    '.catalog-preview__card'
  );
  const catalogCards = document.querySelectorAll(
    '.catalog__cards-wrapper .catalog__card'
  );
  if (window.innerWidth <= 1180) {
    for (let i = 4; i < catalogPreviewCards.length; i += 1) {
      catalogPreviewCards[i].classList.add('block-hidden');
    }
  }
  if (window.innerWidth > 1180) {
    for (let i = 6; i < catalogCards.length; i += 1) {
      catalogCards[i].classList.add('block-hidden');
    }
  } else {
    if (window.innerWidth <= 874 && window.innerWidth > 590) {
      for (let i = 6; i < catalogCards.length; i += 1) {
        catalogCards[i].classList.add('block-hidden');
      }
    } else {
      for (let i = 4; i < catalogCards.length; i += 1) {
        catalogCards[i].classList.add('block-hidden');
      }
    }
  }
}

hideBlocks();

function changeFilter() {
  const filterButtons = document.querySelectorAll('.catalog__filter-btn');
  filterButtons.forEach(function (element) {
    element.addEventListener('click', function () {
      element.classList.toggle('filter-btn--active');
    });
  });
}

changeFilter();

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
