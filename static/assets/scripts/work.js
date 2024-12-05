// Select all cards
const cards = document.querySelectorAll('.card1, .card2, .card3');

// Function to show text on click
cards.forEach((card) => {
    card.addEventListener('click', () => {
        // Remove active class from all cards
        cards.forEach((c) => c.classList.remove('active'));

        // Add active class to the clicked card
        card.classList.add('active');
    });
});

// Ensure the first card starts as active
document.querySelector('.card1').classList.add('active');
