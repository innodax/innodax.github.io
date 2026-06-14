const nav    = document.getElementById('nav');
const burger = document.getElementById('burger');
const drawer = document.getElementById('drawer');

window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 8));

burger.addEventListener('click', () => {
  const open = burger.classList.toggle('open');
  drawer.classList.toggle('open', open);
  document.body.style.overflow = open ? 'hidden' : '';
});

function closeDrawer() {
  burger.classList.remove('open');
  drawer.classList.remove('open');
  document.body.style.overflow = '';
}
