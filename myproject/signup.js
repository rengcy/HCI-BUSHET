// signup.js - client-side validation, password fields and demo flow
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('signupForm');
  const errorMessage = document.getElementById('signupErrorMessage');
  const backBtn = document.getElementById('backToSignIn');
  const signupCard = document.getElementById('signupCard');

  if (!form || !errorMessage) return;

  // utility: email validation
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  // utility: password strength (simple: min 8 chars, must have a letter and a digit)
  function isValidPassword(pw) {
    if (!pw || pw.length < 8) return false;
    if (!/[A-Za-z]/.test(pw)) return false;
    if (!/[0-9]/.test(pw)) return false;
    return true;
  }

  // clear per-field errors
  function clearFieldError(inputEl) {
    if (!inputEl) return;
    inputEl.classList.remove('input-error');
    inputEl.removeAttribute('aria-invalid');
    const errEl = document.getElementById('err-' + inputEl.id);
    if (errEl) {
      errEl.textContent = '';
      errEl.style.display = 'none';
      errEl.setAttribute('aria-hidden', 'true');
    }
  }

  // show per-field error
  function showFieldError(inputEl, message) {
    if (!inputEl) return;
    inputEl.classList.add('input-error');
    inputEl.setAttribute('aria-invalid', 'true');
    const errEl = document.getElementById('err-' + inputEl.id);
    if (errEl) {
      errEl.textContent = message;
      errEl.style.display = 'block';
      errEl.setAttribute('aria-hidden', 'false');
    }
  }

  // clear global error
  function hideGlobalError() {
    errorMessage.style.display = 'none';
    errorMessage.setAttribute('aria-hidden', 'true');
  }

  // show global error
  function showGlobalError(msg) {
    errorMessage.textContent = msg || 'Please fix the highlighted fields before continuing.';
    errorMessage.style.display = 'block';
    errorMessage.setAttribute('aria-hidden', 'false');
  }

  // remove errors when user types
  form.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', () => {
      clearFieldError(input);
      hideGlobalError();
    });
  });

  // back button: fade and go back to login (same visual transition used elsewhere)
  if (backBtn) {
    backBtn.addEventListener('click', function () {
      signupCard.classList.add('fade-out');
      setTimeout(() => {
        window.location.href = 'login.html';
      }, 360);
    });
  }

  // form submit: validate then continue demo flow
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    let hasError = false;
    hideGlobalError();

    // get fields
    const firstName = document.getElementById('firstName');
    const lastName = document.getElementById('lastName');
    const email = document.getElementById('signupEmail');
    const phone = document.getElementById('phone');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');

    // clear previous field errors
    [firstName, lastName, email, phone, password, confirmPassword].forEach(el => {
      if (el) clearFieldError(el);
    });

    // validate first name
    if (!firstName || !firstName.value.trim()) {
      showFieldError(firstName, 'First name is required.');
      if (!hasError) firstName.focus();
      hasError = true;
    }

    // validate last name
    if (!lastName || !lastName.value.trim()) {
      showFieldError(lastName, 'Last name is required.');
      if (!hasError) lastName.focus();
      hasError = true;
    }

    // validate email
    if (!email || !email.value.trim()) {
      showFieldError(email, 'Email is required.');
      if (!hasError) email.focus();
      hasError = true;
    } else if (!isValidEmail(email.value.trim())) {
      showFieldError(email, 'Please enter a valid email address.');
      if (!hasError) email.focus();
      hasError = true;
    }

    // validate password
    if (!password || !password.value) {
      showFieldError(password, 'Password is required.');
      if (!hasError) password.focus();
      hasError = true;
    } else if (!isValidPassword(password.value)) {
      showFieldError(password, 'Password must be at least 8 chars and include letters and numbers.');
      if (!hasError) password.focus();
      hasError = true;
    }

    // confirm password
    if (!confirmPassword || !confirmPassword.value) {
      showFieldError(confirmPassword, 'Please confirm your password.');
      if (!hasError) confirmPassword.focus();
      hasError = true;
    } else if (password && (password.value !== confirmPassword.value)) {
      showFieldError(confirmPassword, 'Passwords do not match.');
      if (!hasError) confirmPassword.focus();
      hasError = true;
    }

    // optional: simple phone validation if provided (very permissive)
    if (phone && phone.value.trim() && phone.value.trim().length < 6) {
      showFieldError(phone, 'If provided, phone number looks too short.');
      if (!hasError) phone.focus();
      hasError = true;
    }

    if (hasError) {
      showGlobalError('There are errors in the form. Please review the highlighted fields.');
      return;
    }

    // If here, validation passed -> simulate the previous behavior (fade then redirect)
    signupCard.classList.add('fade-out');

    setTimeout(() => {
      // For demo: after successful signup go to welcome page
      window.location.href = 'welcome.html';
    }, 380);
  });
});