document.addEventListener('DOMContentLoaded', function() {
  var fileInput = document.getElementById('media-file');
  var previewBox = document.querySelector('.preview-box');
  var mediaUrl = document.getElementById('media-url');
  var form = document.querySelector('.create-post-form');
  if (fileInput) {
    fileInput.addEventListener('change', function() {
      if (fileInput.files && fileInput.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
          if (previewBox) {
            previewBox.innerHTML = '<img src="' + e.target.result + '" alt="Preview" style="max-width:100%;max-height:200px;border-radius:8px;">';
          }
        };
        reader.readAsDataURL(fileInput.files[0]);
      }
    });
  }
  if (mediaUrl) {
    mediaUrl.addEventListener('input', function() {
      if (mediaUrl.value && previewBox) {
        previewBox.innerHTML = '<img src="' + mediaUrl.value + '" alt="Preview" style="max-width:100%;max-height:200px;border-radius:8px;" onerror="this.closest(\'.preview-box\').innerHTML=\'<p style=\'color:#6B7280;\'>Invalid URL</p>\'">';
      }
    });
  }
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      var caption = document.getElementById('caption');
      if (caption && caption.value.trim()) {
        alert('Post published successfully!');
        form.reset();
        if (previewBox) previewBox.innerHTML = '<p>Your selected media will appear here.</p>';
      } else {
        alert('Please add a caption before publishing.');
      }
    });
  }
  var cancelBtn = document.querySelector('.cancel-button');
  if (cancelBtn) {
    cancelBtn.addEventListener('click', function() {
      form.reset();
      if (previewBox) previewBox.innerHTML = '<p>Your selected media will appear here.</p>';
    });
  }
});
