//mobile-menu
(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const backdrop = document.querySelector('.backdrop');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');
    backdrop.classList.toggle('is-open');
    document.body.classList.toggle('scroll-hidden');
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  mobileMenu.addEventListener('click', (event) => {
    if (event.target.nodeName === 'A') {
      toggleMenu()
    }
  })

  // Закрываем мобильное меню на более широких экранах
  // в случае изменения ориентации устройства.
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    document.body.classList.remove('scroll-hidden');
  });
})();


//compact header (изменение хедера при скроле)
(() => {
  const menuHeader = document.querySelector('.header');
  console.log('test', menuHeader)
  window.onscroll = function () { scrollFunction() };

  function scrollFunction() {
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
      menuHeader.classList.add('compact')
    } else {
      menuHeader.classList.remove('compact')
    }
  }
}
)();