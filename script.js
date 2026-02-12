// Interactive reveal functionality
document.addEventListener('DOMContentLoaded', function () {
    const revealButton = document.getElementById('revealButton');
    const landingScreen = document.getElementById('landingScreen');
    const mainContent = document.getElementById('mainContent');

    // Add click event to reveal button
    revealButton.addEventListener('click', function () {
        // Add click animation to button
        revealButton.style.transform = 'scale(0.95)';

        setTimeout(() => {
            // Fade out landing screen
            landingScreen.style.opacity = '0';
            landingScreen.style.transform = 'scale(0.95)';

            setTimeout(() => {
                // Hide landing screen and show main content
                landingScreen.style.display = 'none';
                mainContent.classList.remove('hidden');

                // Trigger confetti effect
                createConfetti();

                // Start floating flowers animation
                startFloatingFlowers();
            }, 600);
        }, 100);
    });

    // Create confetti effect
    function createConfetti() {
        const confettiCount = 50;
        const colors = ['#ff9a9e', '#fecfef', '#ffecd2', '#fcb69f', '#a8edea', '#fed6e3'];

        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = Math.random() * 3 + 's';
            confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
            document.body.appendChild(confetti);

            // Remove confetti after animation
            setTimeout(() => {
                confetti.remove();
            }, 5000);
        }
    }

    // Create floating flowers animation
    function startFloatingFlowers() {
        const flowersContainer = document.getElementById('floatingFlowers');
        const flowers = ['🌸', '🌺', '🌼', '🌻', '🌷', '🏵️', '💐', '🌹'];

        function createFlower() {
            const flower = document.createElement('div');
            flower.className = 'floating-flower';
            flower.textContent = flowers[Math.floor(Math.random() * flowers.length)];
            flower.style.left = Math.random() * 100 + 'vw';
            flower.style.animationDuration = (Math.random() * 5 + 8) + 's';
            flower.style.fontSize = (Math.random() * 1.5 + 1.5) + 'rem';
            flower.style.animationDelay = Math.random() * 2 + 's';

            flowersContainer.appendChild(flower);

            // Remove flower after animation
            setTimeout(() => {
                flower.remove();
            }, 15000);
        }

        // Create initial flowers
        for (let i = 0; i < 8; i++) {
            setTimeout(() => createFlower(), i * 500);
        }

        // Continue creating flowers periodically
        setInterval(() => {
            createFlower();
        }, 2000);
    }
});
