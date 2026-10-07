document.addEventListener('DOMContentLoaded', function() {
  var followBtn = document.querySelector('.profile-button.follow');
  if (followBtn) {
    followBtn.addEventListener('click', function() {
      if (followBtn.classList.contains('following')) {
        followBtn.classList.remove('following');
        followBtn.textContent = 'Follow';
        followBtn.style.backgroundColor = '';
        followBtn.style.color = '';
        followBtn.style.border = '1px solid var(--border-color)';
        var stats = document.querySelectorAll('.profile-stat strong');
        if (stats[1]) {
          var count = parseInt(stats[1].textContent);
          if (!isNaN(count)) stats[1].textContent = count - 1;
        }
      } else {
        followBtn.classList.add('following');
        followBtn.textContent = 'Following';
        followBtn.style.backgroundColor = 'var(--white)';
        followBtn.style.color = 'var(--text-color)';
        followBtn.style.border = '1px solid var(--border-color)';
        var stats = document.querySelectorAll('.profile-stat strong');
        if (stats[1]) {
          var count = parseInt(stats[1].textContent);
          if (!isNaN(count)) stats[1].textContent = count + 1;
        }
      }
    });
  }
  var editBtn = document.querySelector('.profile-button');
  if (editBtn && !editBtn.classList.contains('follow') && !editBtn.classList.contains('message')) {
    editBtn.addEventListener('click', function() {
      alert('Edit profile feature - come soon!');
    });
  }
});
