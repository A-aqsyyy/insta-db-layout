document.addEventListener('DOMContentLoaded', function() {
  var mobileMenuBtn = document.querySelector('.navbar-menu');
  var navbarLinks = document.querySelector('.navbar-links');
  if (mobileMenuBtn && navbarLinks) {
    mobileMenuBtn.addEventListener('click', function() {
      navbarLinks.classList.toggle('mobile-open');
    });
  }
  var currentPage = window.location.pathname.split('/').pop() || 'index.html';
  if (currentPage === '' || currentPage === 'index.html') {
    currentPage = 'index.html';
  }
  document.querySelectorAll('.navbar-link, .navbar-profile').forEach(function(link) {
    var href = link.getAttribute('href');
    if (href && href.indexOf(currentPage) !== -1) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});
