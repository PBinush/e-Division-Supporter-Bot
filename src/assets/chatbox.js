alert("pop-up");

  // Function to send a message
  function sendMessage() {
    const input = document.getElementById('chat-input');
    const message = input.value.trim();

    if (message !== '') {
      // Add user message to chat
      addMessage('user', message);

      // Clear input
      input.value = '';

      // Simulate bot response
      setTimeout(() => {
        addMessage('bot', 'You said: ' + message);
      }, 500);
    }
  }

  // Function to add a message to the chat
  function addMessage(sender, message) {
    const chatMessages = document.getElementById('chat-messages');

    // Create message element
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', sender);

    const messageText = document.createElement('p');
    messageText.textContent = message;

    messageElement.appendChild(messageText);
    chatMessages.appendChild(messageElement);

    // Scroll to the bottom of the chat
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }