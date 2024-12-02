document.addEventListener('DOMContentLoaded', () => {
    
    lucide.createIcons();

    
    const filterButtons = document.querySelectorAll('.filter-button');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });

    
    const chatItems = document.querySelectorAll('.chat-item');
    chatItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.backgroundColor = 'var(--bg-darker)';
        });
        item.addEventListener('mouseleave', () => {
            item.style.backgroundColor = 'transparent';
        });
    });

    
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

    
    const folders = document.querySelectorAll('.folder');
    folders.forEach(folder => {
        folder.addEventListener('click', () => {
            const chevron = folder.querySelector('[data-lucide="chevron-down"]');
            chevron.style.transform = chevron.style.transform === 'rotate(180deg)' 
                ? 'rotate(0deg)' 
                : 'rotate(180deg)';
        });
    });
});