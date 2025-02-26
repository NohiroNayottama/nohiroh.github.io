// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

darkModeToggle.addEventListener('change', () => {
  body.setAttribute('data-theme', darkModeToggle.checked ? 'dark' : 'light');
});

// Parallax Effect
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const parallaxElements = document.querySelectorAll('.parallax');

  parallaxElements.forEach(element => {
    const speed = element.getAttribute('data-speed') || 0.5;
    element.style.transform = `translateY(${scrollY * speed}px)`;
  });
});
