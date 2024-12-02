// Optional: Add some interactivity if needed
document.addEventListener("DOMContentLoaded", () => {
    console.log("Blog loaded successfully!");
});
document.querySelector('.contact-form').addEventListener('submit', (event) => {
    event.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
});
