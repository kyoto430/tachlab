function openLeftMenu() {
  const menuFilter = document.querySelector('.accordeon');
  const filterBtn = document.querySelector('.catalog__sort-btn');
  const overlay = document.querySelector('.overlay-menu');
  const closeBtn = document.querySelector('.accordeon__close-btn');
  const showBtn = document.querySelector('.accordeon__show-btn');

  showBtn.addEventListener('click', function () {
    document.body.classList.remove('locker');
    menuFilter.classList.remove('active');
    overlay.classList.remove('active');
  });

  closeBtn.addEventListener('click', function () {
    document.body.classList.remove('locker');
    menuFilter.classList.remove('active');
    overlay.classList.remove('active');
  });

  filterBtn.addEventListener('click', function () {
    document.body.classList.add('locker');
    filterBtn.classList.toggle('active');
    menuFilter.classList.toggle('active');
    overlay.classList.toggle('active');
  });

  document.addEventListener('click', function (event) {
    if (
      !menuFilter.contains(event.target) &&
      !filterBtn.contains(event.target)
    ) {
      document.body.classList.remove('locker');
      filterBtn.classList.remove('active');
      menuFilter.classList.remove('active');
      overlay.classList.remove('active');
    }
  });
}

openLeftMenu();
