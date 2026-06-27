(() => {
  const FOOTER_HTML = `
<footer>
  <div class="footer-inner">
    <a href="index.html" class="footer-brand">
      <div class="footer-brand-icon"><img src="img/icon.png" alt="" onerror="this.style.display='none';this.parentElement.innerHTML='🎲'" /></div>
      <span class="footer-brand-text">Fokus<span>Roll</span></span>
    </a>
    <ul class="footer-links">
      <li><a href="about_tournament.html">Turnaj</a></li>
      <li><a href="about_rpgs.html">Doprovodný program</a></li>
      <li><a href="info.html">Praktické info</a></li>
      <li><a href="harmonogram.html">Harmonogram</a></li>
      <li><a href="contact.html">Kontakty</a></li>
      <li><a href="registration.html">Registrace</a></li>
    </ul>
  </div>
</footer>
`;
  const placeholder = document.getElementById('footer-placeholder');
  if (placeholder) placeholder.outerHTML = FOOTER_HTML;
})();
