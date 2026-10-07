document.addEventListener('DOMContentLoaded', function() {
  var searchForm = document.querySelector('.search-form');
  var explorePosts = document.querySelectorAll('.explore-post');
  if (searchForm) {
    searchForm.addEventListener('submit', function(e) {
      e.preventDefault();
      var input = document.getElementById('explore-search');
      if (!input) return;
      var query = input.value.trim().toLowerCase();
      explorePosts.forEach(function(post) {
        var info = post.querySelector('.explore-post-info');
        if (info) {
          var text = info.textContent.toLowerCase();
          if (!query || text.indexOf(query) !== -1) {
            post.style.display = '';
          } else {
            post.style.display = 'none';
          }
        }
      });
    });
  }
  document.querySelectorAll('.stories-container .story').forEach(function(story) {
    story.addEventListener('click', function() {
      var nameEl = story.querySelector('.story-name');
      var name = nameEl ? nameEl.textContent : 'Story';
      alert('Viewing ' + name + "'s story!");
    });
  });
});
