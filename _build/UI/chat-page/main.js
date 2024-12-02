import { initializeSidebar } from './components/sidebar.js';
import { initializeFilters } from './components/filters.js';
import { initializeChat } from './components/chat.js';
import { createIcons, icons } from 'https://unpkg.com/lucide@latest/dist/esm/lucide.js';

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide icons with all icons
    createIcons({
        icons: icons
    });

    // Initialize components
    initializeSidebar();
    initializeFilters();
    initializeChat();
});