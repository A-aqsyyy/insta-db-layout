document.addEventListener('DOMContentLoaded', function() {
  var markBtn = document.querySelector('.mark-all-read');
  if (markBtn) {
    markBtn.addEventListener('click', function() {
      document.querySelectorAll('.notification-item.unread').forEach(function(item) {
        item.classList.remove('unread');
      });
      markBtn.textContent = 'All Read';
      markBtn.style.opacity = '0.6';
    });
  }
  document.querySelectorAll('.notification-item').forEach(function(item) {
    item.addEventListener('click', function() {
      item.classList.remove('unread');
    });
  });
});
