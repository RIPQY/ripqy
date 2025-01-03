document.addEventListener('DOMContentLoaded', () => {
    // Navbar toggle for mobile devices
    const navbarToggle = document.querySelector('.navbar-toggle');
    const navbarLinks = document.querySelector('.navbar-links');
  
    // Toggle the navbar when clicking the hamburger icon on mobile
    navbarToggle.addEventListener('click', () => {
      navbarLinks.classList.toggle('active');
      navbarToggle.classList.toggle('active');
    });
  });
  