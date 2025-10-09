// script.js

document.addEventListener('DOMContentLoaded', function () {
    const connectBtn = document.getElementById('connectBtn');

    connectBtn.addEventListener('click', function () {
        alert('Thank you for your interest! We will connect you soon.');
    });
});
document.addEventListener('DOMContentLoaded', function () {
  const connectBtn = document.getElementById('connectBtn');
  connectBtn.addEventListener('click', function () {
    alert('Thank you for your interest! We will connect you soon.');
  });

  // Hamburger menu toggle
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  const navItems = document.querySelectorAll('.nav-links a');

  hamburger.addEventListener('click', function () {
    navLinks.classList.toggle('open');
  });

  // Close menu after selecting link (for mobile)
  navItems.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
    });
  });
});
