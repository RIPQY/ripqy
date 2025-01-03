document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.querySelector('.login-form');
    
    loginForm.addEventListener('submit', function (event) {
      const email = document.getElementById('email');
      const password = document.getElementById('password');
  
      // Validasi email
      if (!email.value || !email.value.includes('@')) {
        alert('Please enter a valid email.');
        event.preventDefault(); // Mencegah form dikirim
        return;
      }
  
      // Validasi password
      if (!password.value || password.value.length < 6) {
        alert('Password must be at least 6 characters long.');
        event.preventDefault(); // Mencegah form dikirim
        return;
      }
  
      // Jika valid, form akan dikirim
    });
  });
  