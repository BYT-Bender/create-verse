const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const cardIndex = Array.from(cards).indexOf(entry.target);

      // Set specific delays for row synchronization
      let delay = 0; 
      if (cardIndex === 0 || cardIndex === 1) {
        delay = 0; // Green and White (upper row) fade at the same time
      } else if (cardIndex === 2 || cardIndex === 3) {
        delay = 0.6; // Yellow and Blue (lower row) fade at the same time
      }

      entry.target.style.animationDelay = `${delay}s`;

      // Determine left or right animation based on card position
      if (cardIndex % 2 === 0) {
        entry.target.classList.add('visible-left'); // Fade in from left
      } else {
        entry.target.classList.add('visible-right'); // Fade in from right
      }

      observer.unobserve(entry.target); // Stop observing once animated
    }
  });
}, { threshold: 0.2 }); // Trigger when 20% of the card is visible

// Apply hidden class to all cards initially and observe them
cards.forEach((card) => {
  card.classList.add('hidden');
  observer.observe(card);
});
 