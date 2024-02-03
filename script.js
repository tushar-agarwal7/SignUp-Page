document.addEventListener('DOMContentLoaded', function () {
  const passwordInput = document.getElementById('pass1');
  const confirmPasswordInput = document.getElementById('pass2');
  const form = document.querySelector('form');

  form.addEventListener('submit', function (event) {
    if (passwordInput.value !== confirmPasswordInput.value) {
      alert('Password and Confirm Password must match');
      event.preventDefault(); // Prevent form submission if passwords don't match
    }
  })
});