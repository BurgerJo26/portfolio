// Add a subtle border to the topbar when the page scrolls
(function topbarScroll() {
  const bar = document.querySelector('.topbar');
  if (!bar) return;
  const onScroll = () => {
    bar.classList.toggle('is-scrolled', window.scrollY > 8);
  };
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
})();

// Scrollspy for case-study side nav
(function scrollspy() {
  const nav = document.querySelector('.cs-nav');
  if (!nav) return;
  const links = nav.querySelectorAll('a[href^="#"]');
  if (!links.length) return;

  const sections = Array.from(links)
    .map(l => document.querySelector(l.getAttribute('href')))
    .filter(Boolean);

  const setActive = id => {
    links.forEach(l => l.classList.toggle('is-active', l.getAttribute('href') === '#' + id));
  };

  const io = new IntersectionObserver(
    entries => {
      entries.forEach(e => {
        if (e.isIntersecting) setActive(e.target.id);
      });
    },
    { rootMargin: '-20% 0px -70% 0px', threshold: 0 }
  );

  sections.forEach(s => io.observe(s));
})();
