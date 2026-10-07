document.addEventListener('DOMContentLoaded', function() {
  var conversationItems = document.querySelectorAll('.conversation');
  var chatArea = document.querySelector('.chat');
  conversationItems.forEach(function(item) {
    item.addEventListener('click', function() {
      conversationItems.forEach(function(c) { c.classList.remove('active'); });
      item.classList.add('active');
      var name = item.querySelector('.conversation-name');
      if (name && chatArea) {
        var header = chatArea.querySelector('.chat-header .conversation-name');
        if (header) header.textContent = name.textContent;
      }
    });
  });
  var sendBtn = document.querySelector('.chat-input button');
  var chatInput = document.querySelector('.chat-input input');
  var chatMessages = document.querySelector('.chat-messages');
  if (sendBtn && chatInput && chatMessages) {
    sendBtn.addEventListener('click', function() {
      var text = chatInput.value.trim();
      if (text) {
        var bubble = document.createElement('div');
        bubble.className = 'message-bubble sent';
        bubble.textContent = text;
        chatMessages.appendChild(bubble);
        chatInput.value = '';
        chatMessages.scrollTop = chatMessages.scrollHeight;
      }
    });
    chatInput.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') {
        sendBtn.click();
      }
    });
  }
});
