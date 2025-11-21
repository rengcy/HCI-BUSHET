// login.js
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('signinForm');
  const errorMessage = document.getElementById('errorMessage');
  const container = document.getElementById('loginContainer');
  const signupLink = document.getElementById('signupLink');
  const forgotLink = document.getElementById('forgotLink');

  if (!form || !errorMessage || !container) return;

  errorMessage.classList.remove('show');
  errorMessage.setAttribute('aria-hidden', 'true');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const email = emailInput ? emailInput.value.trim().toLowerCase() : '';
    const password = passwordInput ? passwordInput.value : '';

    // demo credential check
    if (email === 'demo@example.com' && password === 'password123') {
      // play a short fade-out animation, then redirect to welcome.html
      container.classList.add('fade-out');

      // wait for the animation to finish before redirecting
      setTimeout(() => {
        // redirect to the welcome page
        window.location.href = 'welcome.html';
      }, 380); // must match fade-out duration (slightly longer)
    } else {
      errorMessage.classList.add('show');
      errorMessage.setAttribute('aria-hidden', 'false');
      errorMessage.focus();
    }
  });

  // hide error while user types
  form.querySelectorAll('input').forEach(input =>
    input.addEventListener('input', () => {
      errorMessage.classList.remove('show');
      errorMessage.setAttribute('aria-hidden', 'true');
    })
  );

  // Sign Up: fade out and navigate to signup.html (same visual transition)
  if (signupLink) {
    signupLink.addEventListener('click', function (e) {
      // preserve default when user wants to open in new tab
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return;
      e.preventDefault();
      container.classList.add('fade-out');
      setTimeout(() => {
        window.location.href = signupLink.getAttribute('href');
      }, 360);
    });
  }

  // Forgot Password: fade out and navigate to forgot.html (same animation)
  if (forgotLink) {
    forgotLink.addEventListener('click', function (e) {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.button === 1) return;
      e.preventDefault();
      container.classList.add('fade-out');
      setTimeout(() => {
        window.location.href = forgotLink.getAttribute('href');
      }, 360);
    });
  }
});