// Top bar scroll shadow
(function () {
  const bar = document.querySelector('.topbar');
  if (!bar) return;
  const onScroll = () => bar.classList.toggle('is-scrolled', window.scrollY > 8);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
})();

// Case study side-nav scrollspy
(function () {
  const nav = document.querySelector('.cs-nav');
  if (!nav) return;
  const links = nav.querySelectorAll('a[href^="#"]');
  const sections = Array.from(links)
    .map(l => document.querySelector(l.getAttribute('href')))
    .filter(Boolean);
  if (!sections.length) return;
  const setActive = id => {
    links.forEach(l => l.classList.toggle('is-active', l.getAttribute('href') === '#' + id));
  };
  const io = new IntersectionObserver(
    entries => entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); }),
    { rootMargin: '-15% 0px -70% 0px', threshold: 0 }
  );
  sections.forEach(s => io.observe(s));
})();
