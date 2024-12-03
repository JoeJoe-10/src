// Optional: Add some interactivity if needed
document.addEventListener("DOMContentLoaded", () => {
    console.log("Blog loaded successfully!");
});
document.querySelector('.contact-form').addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
});

// Search Functionality
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input');
    const blogCards = document.querySelectorAll('.blog-card');

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase().trim();

        blogCards.forEach(card => {
            const title = card.getAttribute('data-title').toLowerCase();

            if (title.includes(query)) {
                card.style.display = 'block'; // Show matching posts
            } else {
                card.style.display = 'none'; // Hide non-matching posts
            }
        });
    });
});
