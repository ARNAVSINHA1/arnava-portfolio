document.addEventListener('DOMContentLoaded', () => {
    // You can add any interactive features or animations specific to the landing page here
    // For example, a fade-in effect or CTA button interaction:
    const ctaButton = document.querySelector('.cta-button');
    ctaButton.addEventListener('click', () => {
        // You could add a fade-out effect or animation here before navigating to home page
        window.location.href = 'home.html';
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Dynamic Text Animation in Hero Section
    const dynamicText = document.querySelector('.dynamic-text');
    const textArray = ['Software Developer | Problem Solver | Tech Enthusiast | Electrical Engineer','Electrical Engineer', 'Full-Stack Developer', 'Problem Solver'];
    let textIndex = 0;
    let charIndex = 0;

    const changeText = () => {
        dynamicText.textContent = '';
        const currentText = textArray[textIndex].split('');
        const interval = setInterval(() => {
            dynamicText.textContent += currentText[charIndex];
            charIndex++;
            if (charIndex === currentText.length) {
                clearInterval(interval);
                setTimeout(() => {
                    charIndex = 0;
                    textIndex = (textIndex + 1) % textArray.length;
                    changeText();
                }, 1000);
            }
        }, 100);
    };

    changeText();

    // Smooth Scroll for Navigation Links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - 60, // Adjusting for fixed header
                behavior: 'smooth',
            });
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    // Dynamic Text Animation in Hero Section
    const dynamicText = document.querySelector('.dynamic-name');
    const textArray = ['Arnava Kumar Sinha'];
    let textIndex = 0;
    let charIndex = 0;

    const changeText = () => {
        dynamicText.textContent = '';
        const currentText = textArray[textIndex].split('');
        const interval = setInterval(() => {
            dynamicText.textContent += currentText[charIndex];
            charIndex++;
            if (charIndex === currentText.length) {
                clearInterval(interval);
                setTimeout(() => {
                    charIndex = 0;
                    textIndex = (textIndex + 1) % textArray.length;
                    changeText();
                }, 100000);
            }
        }, 100);
    };

    changeText();

    // Smooth Scroll for Navigation Links
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - 60, // Adjusting for fixed header
                behavior: 'smooth',
            });
        });
    });
});
