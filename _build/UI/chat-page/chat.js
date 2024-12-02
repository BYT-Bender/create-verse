export function initializeChat() {
    const messageInput = document.querySelector('.input-container input');
    const sendButton = document.querySelector('.send-button');

    const sendMessage = () => {
        const message = messageInput.value.trim();
        if (message) {
            console.log('Sending message:', message);
            messageInput.value = '';
        }
    };

    sendButton.addEventListener('click', sendMessage);
    messageInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendMessage();
        }
    });
}