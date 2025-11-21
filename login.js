// login.js (client-side; run in the browser)
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('signinForm');
  const errorMessage = document.getElementById('errorMessage');

  // if elements are missing, stop (prevents runtime errors)
  if (!form || !errorMessage) return;

  // hide error initially
  errorMessage.classList.remove('show');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const email = emailInput ? emailInput.value.trim().toLowerCase() : '';
    const password = passwordInput ? passwordInput.value : '';

    // demo credential check
    if (email === 'demo@example.com' && password === 'password123') {
      alert('Login successful! Welcome!');
      errorMessage.classList.remove('show');
      form.reset();
    } else {
      errorMessage.classList.add('show');
    }
  });

  // hide error while user types
  form.querySelectorAll('input').forEach(input =>
    input.addEventListener('input', () => errorMessage.classList.remove('show'))
  );
});