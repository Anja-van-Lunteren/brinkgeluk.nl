// Hamburgermenu toggle
const hamburger = document.querySelector('.hamburger');
const menuOverlay = document.querySelector('.menu-overlay');

hamburger.addEventListener('click', () => {
  menuOverlay.classList.toggle('active');
  hamburger.classList.toggle('active');
});

// Sluit menu bij klik op een link
document.querySelectorAll('.menu-overlay a').forEach(link => {
  link.addEventListener('click', () => {
    menuOverlay.classList.remove('active');
    hamburger.classList.remove('active');
  });
});

// Soepel scrollen naar #contact
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});
