// Small interaction layer: update document title when scrolling to sections.
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(a => a.style.color = a.getAttribute('href') === '#' + entry.target.id ? 'var(--accent)' : '');
    }
  });
}, {rootMargin: '-35% 0px -55% 0px'});
sections.forEach(s => observer.observe(s));
