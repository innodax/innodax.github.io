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
        <img src="img/logos/fokusroll-logo.svg" alt="" onerror="this.style.display='none';this.parentElement.textContent='🎲'" />
      </div>
      <span class="nav-logo-text">Fokus<span>Roll</span></span>
    </a>
    <ul class="nav-links">
      <li><a href="turnaj.html" class="nav-link">Turnaj</a></li>
      <li><a href="info.html" class="nav-link">Praktické info</a></li>
      <li><a href="kontakty.html" class="nav-link">Kontakty</a></li>
    </ul>
    <div class="nav-actions">
    </div>
    <button class="nav-burger" id="burger" aria-label="Toggle menu">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>
<div class="nav-drawer" id="drawer">
  <a href="index.html" onclick="closeDrawer()">Domů</a>
  <a href="turnaj.html" onclick="closeDrawer()">Turnaj</a>
  <a href="info.html" onclick="closeDrawer()">Praktické info</a>
  <a href="kontakty.html" onclick="closeDrawer()">Kontakty</a>
</div>
`;

  document.getElementById('nav-placeholder').outerHTML = NAV_HTML;

  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .nav-drawer a').forEach(a => {
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
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) closeDrawer();
  });
})();
