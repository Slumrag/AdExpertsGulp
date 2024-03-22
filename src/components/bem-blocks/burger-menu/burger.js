const burgerMenu = $('.burger-menu__dialog');
const burgerButton = $('.burger-menu__button');
burgerButton.on('click', (e) => {
  toggleBurger();
});

burgerMenu.on('click', (e) => {
  console.log($(e.target));
  if (e.target.closest('a,button')) {
    closeBurger();
  }
});

function closeBurger() {
  const burgerMenu = $('.burger-menu__dialog');
  const burgerButton = $('.burger-menu__button');
  burgerButton.removeClass('burger-menu__button_active');
  burgerMenu[0].open = false;
  $('body').removeClass('no-scroll');
}

function toggleBurger() {
  const burgerMenu = $('.burger-menu__dialog');
  const burgerButton = $('.burger-menu__button');
  burgerButton.toggleClass('burger-menu__button_active');
  burgerMenu[0].open = !burgerMenu[0].open;
  $('body').toggleClass('no-scroll');
}
