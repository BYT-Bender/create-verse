export function initializeSidebar() {
    const folders = document.querySelectorAll('.folder');
    folders.forEach(folder => {
        folder.addEventListener('click', () => {
            const chevron = folder.querySelector('[data-lucide="chevron-down"]');
            chevron.style.transform = chevron.style.transform === 'rotate(180deg)' 
                ? 'rotate(0deg)' 
                : 'rotate(180deg)';
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
}