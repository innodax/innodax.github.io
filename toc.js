function initToc(sectionIds) {
  const tocLinks = document.querySelectorAll('.toc-link');
  const tocMobileLinks = document.querySelectorAll('.toc-mobile-link');
  const tocSections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);

  function setTocActive(id) {
    tocLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + id));
  }
  function updateToc() {
    let current = tocSections[0];
    for (const el of tocSections) {
      if (el.getBoundingClientRect().top <= 90) current = el;
    }
    if (current) setTocActive(current.id);
  }
  window.addEventListener('scroll', updateToc, { passive: true });
  updateToc();

  const tocToggleBtn = document.getElementById('toc-toggle');
  const tocMobileList = document.getElementById('toc-mobile-list');
  tocToggleBtn.addEventListener('click', () => {
    const open = tocMobileList.classList.toggle('open');
    tocToggleBtn.setAttribute('aria-expanded', open);
  });
  tocMobileLinks.forEach(l => l.addEventListener('click', () => {
    tocMobileList.classList.remove('open');
    tocToggleBtn.setAttribute('aria-expanded', 'false');
  }));
}
