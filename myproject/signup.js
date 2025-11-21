// signup.js
document.addEventListener('DOMContentLoaded', function () {
  const backBtn = document.getElementById('backToSignIn');
  const signupCard = document.getElementById('signupCard');
  const form = document.getElementById('signupForm');

  if (backBtn) {
    backBtn.addEventListener('click', function () {
      // small fade-out then navigate back to login
      signupCard.classList.add('fade-out');
      setTimeout(() => {
        window.location.href = 'login.html';
      }, 360);
    });
  }

  // For demo: Continue will simply show an alert and could redirect to welcome or other step
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      // in a real app you'd send the data to the server here
      // for demonstration, navigate to a "welcome" page or show success
      signupCard.classList.add('fade-out');
      setTimeout(() => {
        // redirect to welcome page (or next step)
        window.location.href = 'welcome.html';
      }, 360);
    });
  }
});