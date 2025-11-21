// forgot.js
document.addEventListener('DOMContentLoaded', function () {
  const backBtn = document.getElementById('backToSignIn');
  const backSignInLink = document.getElementById('backSignInLink');
  const forgotForm = document.getElementById('forgotForm');
  const forgotCard = document.querySelector('.card');
  const successMessage = document.getElementById('successMessage');

  // Back (top-left) fade and return to login
  if (backBtn) {
    backBtn.addEventListener('click', function () {
      // avoid interfering with default if user wants new tab (not relevant for button)
      forgotCard.classList.add('fade-out');
      setTimeout(() => {
        window.location.href = 'login.html';
      }, 340);
    });
  }

  // Bottom "Sign In" link
  if (backSignInLink) {
    backSignInLink.addEventListener('click', function (e) {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return;
      e.preventDefault();
      forgotCard.classList.add('fade-out');
      setTimeout(() => {
        window.location.href = backSignInLink.getAttribute('href');
      }, 340);
    });
  }

  if (forgotForm) {
    forgotForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const email = document.getElementById('forgotEmail').value.trim();

      // simple validation
      if (!email || !/.+@.+\..+/.test(email)) {
        // show inline error (simple)
        alert('Please enter a valid email address.');
        return;
      }

      // show success feedback, then redirect to login (demo)
      if (successMessage) {
        successMessage.hidden = false;
      }
      // simulate sending and then return to login - you can replace with actual request
      setTimeout(() => {
        // redirect to login page after showing message briefly
        window.location.href = 'login.html';
      }, 1200);
    });
  }
});