function closeDrawer() {
  document.getElementById('burger').classList.remove('open');
  document.getElementById('drawer').classList.remove('open');
  document.body.style.overflow = '';
}

(() => {
  const NAV_HTML = `
<nav class="nav" id="nav">
  <div class="nav-inner">
    <a href="index.html" class="nav-logo">
      <div class="nav-logo-icon">
        <img src="img/icon.png" alt="" onerror="this.style.display='none';this.parentElement.textContent='🎲'" />
      </div>
      <span class="nav-logo-text">Fokus<span>Roll</span></span>
    </a>
    <ul class="nav-links">
      <li><a href="about.html">O akci</a></li>
      <li><a href="about_tournament.html">O turnaji</a></li>
      <li><a href="about_rpgs.html">Doprovodný program</a></li>
      <li><a href="harmonogram.html">Harmonogram</a></li>
      <li><a href="contact.html">Kontakty</a></li>
    </ul>
    <div class="nav-actions">
      <a href="registration.html" class="nav-cta">Registrace</a>
      <a href="login.html" class="nav-login">Přihlášení</a>
    </div>
    <button class="nav-burger" id="burger" aria-label="Toggle menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>
<div class="nav-drawer" id="drawer">
  <a href="about.html" onclick="closeDrawer()">O akci</a>
  <a href="about_tournament.html" onclick="closeDrawer()">O turnaji</a>
  <a href="about_rpgs.html" onclick="closeDrawer()">Doprovodný program</a>
  <a href="harmonogram.html" onclick="closeDrawer()">Harmonogram</a>
  <a href="contact.html" onclick="closeDrawer()">Kontakty</a>
  <div class="drawer-auth">
    <a href="registration.html" class="drawer-cta" onclick="closeDrawer()">Registrace</a>
    <a href="login.html" class="drawer-login" onclick="closeDrawer()">Přihlášení</a>
  </div>
</div>
`;

  document.getElementById('nav-placeholder').outerHTML = NAV_HTML;

  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .nav-drawer a, .nav-cta, .nav-login').forEach(a => {
    if (a.getAttribute('href') === current) a.classList.add('active');
  });

  const nav = document.getElementById('nav');
  window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 8));

  const burger = document.getElementById('burger');
  const drawer = document.getElementById('drawer');
  burger.addEventListener('click', () => {
    const open = burger.classList.toggle('open');
    drawer.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
})();
