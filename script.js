document.addEventListener('DOMContentLoaded', () => {
    // Dynamic Text Animation in Hero Section
    const dynamicText = document.querySelector('.dynamic-text');
    const textArray = ['Software Developer | Problem Solver | Tech Enthusiast | Electrical Engineer', 'Electrical Engineer', 'Full-Stack Developer', 'Problem Solver'];
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

    // Smooth Scroll for Navigation Links (Internal Links Only)
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Check if the link is an internal link (starts with '#')
            if (e.target.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = e.target.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                window.scrollTo({
                    top: targetElement.offsetTop - 60, // Adjusting for fixed header
                    behavior: 'smooth',
                });
            }
        });
    });

    // Dynamic Text Animation for Name Section
    const dynamicName = document.querySelector('.dynamic-name');
    const nameArray = ['Arnava Kumar Sinha'];
    let nameIndex = 0;
    let nameCharIndex = 0;

    const changeNameText = () => {
        dynamicName.textContent = '';
        const currentName = nameArray[nameIndex].split('');
        const interval = setInterval(() => {
            dynamicName.textContent += currentName[nameCharIndex];
            nameCharIndex++;
            if (nameCharIndex === currentName.length) {
                clearInterval(interval);
                setTimeout(() => {
                    nameCharIndex = 0;
                    nameIndex = (nameIndex + 1) % nameArray.length;
                    changeNameText();
                }, 100000); // Pause for a long time before restarting animation
            }
        }, 100);
    };

    changeNameText();
});
