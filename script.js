document.addEventListener('DOMContentLoaded', () => {
    // Handle the image download button interaction
    const downloadBtns = document.querySelectorAll('.download-btn');
  
    downloadBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault(); // Prevents the default action (navigating)
        const imageSrc = btn.getAttribute('href');
        const imageName = btn.getAttribute('download');
        const link = document.createElement('a');
        link.href = imageSrc;
        link.download = imageName;
        link.click(); // Trigger download
      });
    });
  
    // Modal functionality to view images in larger size
    const modal = document.createElement('div');
    modal.classList.add('modal');
    const modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');
    const modalClose = document.createElement('span');
    modalClose.classList.add('modal-close');
    modalClose.innerHTML = '&times;';
    const modalImg = document.createElement('img');
    modalContent.appendChild(modalClose);
    modalContent.appendChild(modalImg);
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
  
    // Open modal on image click
    const images = document.querySelectorAll('.grid-item img');
    images.forEach((image) => {
      image.addEventListener('click', () => {
        modalImg.src = image.src; // Set the modal image to the clicked image's source
        modal.classList.add('open'); // Show the modal
      });
    });
  
    // Close the modal
    modalClose.addEventListener('click', () => {
      modal.classList.remove('open');
    });
  
    // Close modal when clicking outside the image
    window.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('open');
      }
    });
  
    // Navbar toggle for mobile devices
    const navbarToggle = document.querySelector('.navbar-toggle');
    const navbarLinks = document.querySelector('.navbar-links');
  
    // Toggle the navbar when clicking the hamburger icon on mobile
    navbarToggle.addEventListener('click', () => {
      navbarLinks.classList.toggle('active');
      navbarToggle.classList.toggle('active');
    });
  });
  