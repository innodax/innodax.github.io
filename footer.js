(() => {
  const FOOTER_HTML = `
<footer>
  <div class="footer-inner">
    <div class="footer-top">
      <a href="index.html" class="footer-brand">
        <div class="footer-brand-icon"><img src="img/icon.png" alt="" onerror="this.style.display='none';this.parentElement.innerHTML='🎲'" /></div>
        <span class="footer-brand-text">Fokus<span>Roll</span></span>
      </a>
      <ul class="footer-links">
        <li><a href="turnaj.html">Turnaj</a></li>
        <!-- <li><a href="doprovodny-program.html">Doprovodný program</a></li> -->
        <li><a href="info.html">Praktické info</a></li>
        <!-- <li><a href="harmonogram.html">Harmonogram</a></li> -->
        <li><a href="kontakty.html">Kontakty</a></li>
        <!-- <li><a href="registrace.html">Registrace</a></li> -->
        <!-- <li><a href="prihlaseni.html">Přihlášení</a></li> -->
      </ul>
    </div>
    <div class="footer-contact">
      <a href="mailto:fokusroll@email.cz"><ion-icon name="mail-outline"></ion-icon> fokusroll@email.cz</a>
      <a href="tel:608340428"><ion-icon name="call-outline"></ion-icon> 608 340 428</a>
      <a href="https://discord.com/invite/GcmkcQakXZ" target="_blank" rel="noopener"><ion-icon name="logo-discord"></ion-icon> Discord</a>
    </div>
  </div>
</footer>
`;
  const placeholder = document.getElementById('footer-placeholder');
  if (placeholder) placeholder.outerHTML = FOOTER_HTML;
})();
