document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.story-avatar').forEach(function(avatar) {
    avatar.style.cursor = 'pointer';
    avatar.addEventListener('click', function(e) {
      e.stopPropagation();
      var story = avatar.closest('.story');
      var nameEl = story ? story.querySelector('.story-name') : null;
      var name = nameEl ? nameEl.textContent : 'Story';
      alert('Viewing ' + name + "'s story!");
    });
  });
});
