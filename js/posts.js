document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.post-action.like').forEach(function(btn) {
    btn.addEventListener('click', function() {
      btn.classList.toggle('active');
      var post = btn.closest('.post');
      if (post) {
        var likesEl = post.querySelector('.post-likes');
        if (likesEl) {
          var text = likesEl.textContent || '';
          var match = text.match(/(\d+)/);
          if (match) {
            var count = parseInt(match[1]);
            if (btn.classList.contains('active')) {
              likesEl.textContent = (count + 1) + ' likes';
            } else {
              likesEl.textContent = (count - 1) + ' likes';
            }
          }
        }
      }
    });
  });
  document.querySelectorAll('.post-action.save').forEach(function(btn) {
    btn.addEventListener('click', function() {
      btn.classList.toggle('active');
    });
  });
  document.querySelectorAll('.post-comment-form button').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var input = btn.parentElement.querySelector('input');
      if (input && input.value.trim()) {
        alert('Comment posted: ' + input.value.trim());
        input.value = '';
      }
    });
  });
});
