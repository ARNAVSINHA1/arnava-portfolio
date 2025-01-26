document.addEventListener('DOMContentLoaded', () => {
    // You can add any interactive features or animations specific to the landing page here
    // For example, a fade-in effect or CTA button interaction:
    const ctaButton = document.querySelector('.cta-button');
    ctaButton.addEventListener('click', () => {
        // You could add a fade-out effect or animation here before navigating to home page
        window.location.href = 'home.html';
    });
});
