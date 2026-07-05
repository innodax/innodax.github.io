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
      <li><a href="turnaj.html" class="nav-link">Turnaj</a></li>
      <li><a href="doprovodny-program.html" class="nav-link">Doprovodný program</a></li>
      <li><a href="info.html" class="nav-link">Praktické info</a></li>
      <li><a href="harmonogram.html" class="nav-link">Harmonogram</a></li>
      <li><a href="kontakty.html" class="nav-link">Kontakty</a></li>
    </ul>
    <div class="nav-actions">
      <a href="registrace.html" class="nav-cta">Registrace</a>
      <a href="prihlaseni.html" class="nav-login">Přihlášení</a>
    </div>
    <button class="nav-burger" id="burger" aria-label="Toggle menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>
<div class="nav-drawer" id="drawer">
  <a href="turnaj.html" onclick="closeDrawer()">Turnaj</a>
  <a href="doprovodny-program.html" onclick="closeDrawer()">Doprovodný program</a>
  <a href="info.html" onclick="closeDrawer()">Praktické info</a>
  <a href="harmonogram.html" onclick="closeDrawer()">Harmonogram</a>
  <a href="kontakty.html" onclick="closeDrawer()">Kontakty</a>
  <div class="drawer-auth">
    <a href="registrace.html" class="drawer-cta" onclick="closeDrawer()">Registrace</a>
    <a href="prihlaseni.html" class="drawer-login" onclick="closeDrawer()">Přihlášení</a>
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
