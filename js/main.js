document.addEventListener('DOMContentLoaded', () => {
    VANTA.CELLS({
        el: "#vanta-bg",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        color1: 0x162182,
        color2: 0x5d70ff,
        size: 1.20
    });

    const enterBtn = document.getElementById('enter-popup');
    const overlay = document.getElementById('overlay');
    const enterSound = document.getElementById('enter-sound');

    enterBtn.addEventListener('click', () => {
        enterSound.play();
        overlay.style.opacity = '0';
        setTimeout(() => {
            overlay.style.display = 'none';
        }, 500);
    });
});