console.log('js running...');

document.addEventListener('DOMContentLoaded', function () {
  window.addEventListener('scroll', function () {
    const header = document.querySelector('.header');
    const content = document.querySelector('.main');
    if (window.scrollY >= content.offsetTop) {
      header.classList.add('fixed');
    } else {
      header.classList.remove('fixed');
    }
  });
});

function openSubMenus() {
  let arrows = document.querySelectorAll('.arrow');
  let breadcrumbsArrows = document.querySelectorAll('.breadcrumb-arrow');
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
  breadcrumbsArrows.forEach(function (element) {
    let breadSubMenu = element.nextElementSibling;
    let breadLink = element.previousElementSibling;
    if (breadLink.classList.contains('breadcrumb__link--active')) {
      element.classList.add('arrow-blue');
    }
    element.addEventListener('click', function () {
      breadSubMenu.classList.toggle('open-submenu');
    });
  });
}

openSubMenus();

// Меню бургер
function burger() {
  const burgerBtn = document.querySelector('.menu__burger');
  const menu = document.querySelector('.main__nav-menu');
  const menuLinks = document.querySelectorAll('.menu__link');
  const overlay = document.querySelector('.overlay');

  burgerBtn.addEventListener('click', function () {
    document.body.classList.add('lock');
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

function changeTab(tabId, button) {
  const tabs = document.querySelectorAll('.tab-content');
  const tabButtons = document.querySelectorAll('.tabs__slider-wrapper .tab');

  tabs.forEach(function (tab) {
    tab.classList.remove('active-tab');
  });

  tabButtons.forEach((tab) => {
    tab.classList.remove('props-active');
  });

  let selectedTab = document.getElementById(tabId);
  selectedTab.classList.add('active-tab');
  button.classList.add('props-active');
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

//Попапы
function popups() {
  let popupLinks = document.querySelectorAll('.popup-link');
  const body = document.querySelector('body');
  const lockPadding = document.querySelectorAll('.lock-padding');

  let unlock = true;

  const timeout = 500;

  if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++) {
      const popupLink = popupLinks[index];
      popupLink.addEventListener('click', function (e) {
        const popupName = popupLink.getAttribute('href').replace('#', '');
        const curentPopup = document.getElementById(popupName);
        popupOpen(curentPopup);
        e.preventDefault();
      });
    }
  }

  const popupCloseIcon = document.querySelectorAll('.close-popup');
  if (popupCloseIcon.length > 0) {
    for (let index = 0; index < popupCloseIcon.length; index++) {
      const el = popupCloseIcon[index];
      el.addEventListener('click', function (e) {
        popupClose(el.closest('.popup'));
        e.preventDefault();
      });
    }
  }

  function popupOpen(curentPopup) {
    if (curentPopup && unlock) {
      const popupActive = document.querySelector('.popup.open');
      if (popupActive) {
        popupClose(popupActive, false);
      } else {
        bodyLock();
      }
      curentPopup.classList.add('open');
      curentPopup.addEventListener('click', function (e) {
        if (!e.target.closest('.popup__content')) {
          popupClose(e.target.closest('.popup'));
        }
      });
    }
  }

  function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
      popupActive.classList.remove('open');
      if (doUnlock) {
        bodyUnLock();
      }
    }
  }

  function bodyLock() {
    const lockPaddingValue =
      window.innerWidth -
      document.getElementsByTagName('body').offsetWidth +
      'px';
    if (lockPadding.length > 0) {
      for (let index = 0; index < lockPadding.length; index++) {
        const el = lockPadding[index];
        el.style.paddingRight = lockPaddingValue;
      }
    }
    body.style.paddingRight = lockPaddingValue;
    body.classList.add('locker');

    unlock = false;
    setTimeout(function () {
      unlock = true;
    }, timeout);
  }

  function bodyUnLock() {
    setTimeout(function () {
      if (lockPadding.length > 0) {
        for (let index = 0; index < lockPadding.length; index++) {
          const el = lockPadding[index];
          el.style.paddingRight = '0px';
        }
      }
      body.style.paddingRight = '0px';
      body.classList.remove('locker');
    }, timeout);

    unlock = false;
    setTimeout(function () {
      unlock = true;
    }, timeout);
  }
}

popups();
