// Scroll reveal
const revealSections = document.querySelectorAll('.section-reveal');

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealSections.forEach(sec => observer.observe(sec));
} else {
  // Fallback
  revealSections.forEach(sec => sec.classList.add('visible'));
}

// Footer year
const yearSpan = document.getElementById('year');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
