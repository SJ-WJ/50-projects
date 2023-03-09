// Bring in toggle buttons
const toggles = document.querySelectorAll('.faq-toggle');

// Loop through nodelist
// Add click event
// Toggle the active class on the parent node

toggles.forEach(toggle => {
  toggle.addEventListener('click', () => {
    toggle.parentNode.classList.toggle('active');
  });
});
