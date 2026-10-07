document.addEventListener('DOMContentLoaded', function() {
  var loginForm = document.querySelector('.login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
      e.preventDefault();
      var email = document.getElementById('email');
      var password = document.getElementById('password');
      var valid = true;
      if (!email || !email.value || !email.value.includes('@')) {
        valid = false;
        if (email) email.style.borderColor = '#dc2626';
      } else {
        if (email) email.style.borderColor = '';
      }
      if (!password || !password.value || password.value.length < 6) {
        valid = false;
        if (password) password.style.borderColor = '#dc2626';
      } else {
        if (password) password.style.borderColor = '';
      }
      if (valid) {
        alert('Login successful! Redirecting...');
        window.location.href = 'index.html';
      }
    });
  }
  var signupForm = document.querySelector('.signup-form');
  if (signupForm) {
    signupForm.addEventListener('submit', function(e) {
      e.preventDefault();
      var fullName = document.getElementById('full-name');
      var username = document.getElementById('username');
      var email = document.getElementById('signup-email');
      var password = document.getElementById('signup-password');
      var confirm = document.getElementById('confirm-password');
      var valid = true;
      if (!fullName || !fullName.value.trim()) { valid = false; if (fullName) fullName.style.borderColor = '#dc2626'; } else { if (fullName) fullName.style.borderColor = ''; }
      if (!username || !username.value.trim()) { valid = false; if (username) username.style.borderColor = '#dc2626'; } else { if (username) username.style.borderColor = ''; }
      if (!email || !email.value || !email.value.includes('@')) { valid = false; if (email) email.style.borderColor = '#dc2626'; } else { if (email) email.style.borderColor = ''; }
      if (!password || !password.value || password.value.length < 6) { valid = false; if (password) password.style.borderColor = '#dc2626'; } else { if (password) password.style.borderColor = ''; }
      if (!confirm || !confirm.value || confirm.value !== password.value) { valid = false; if (confirm) confirm.style.borderColor = '#dc2626'; } else { if (confirm) confirm.style.borderColor = ''; }
      if (valid) {
        alert('Account created successfully! Redirecting to login...');
        window.location.href = 'login.html';
      }
    });
  }
  document.querySelectorAll('.auth-form input').forEach(function(input) {
    input.addEventListener('input', function() {
      input.style.borderColor = '';
    });
  });
});
