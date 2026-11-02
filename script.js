
const balloonContainer = document.getElementById("balloonContainer");
const confettiContainer = document.getElementById("confettiContainer");
const balloonScreen = document.getElementById("balloonScreen");
const welcomeCard = document.getElementById("welcomeCard");

const celebrateBtn = document.getElementById("celebrateBtn");
const thanksMessage = document.getElementById("thanksMessage");
const heartContainer = document.getElementById("heartContainer");

const balloonColors = [
    "#ff4f81",
    "#ff914d",
    "#ffdb4d",
    "#55cf83",
    "#42bde8",
    "#8170ed",
    "#d76adf",
    "#ff6b6b",
    "#55d6be",
    "#f78fb3",
    "#9b8afb",
    "#f7a35c"
];


// CREATE BALLOONS

function createBalloons() {

    const totalBalloons = 150;

    for (let i = 0; i < totalBalloons; i++) {

        const balloon = document.createElement("div");

        balloon.classList.add("balloon");

        // Different balloon sizes
        const sizes = [25, 35, 45, 55, 65, 75, 85, 95];

        const size = sizes[Math.floor(Math.random() * sizes.length)];

        balloon.style.width = size + "px";
        balloon.style.height = (size * 1.25) + "px";

        // Different colours
        const color = balloonColors[
            Math.floor(Math.random() * balloonColors.length)
        ];

        balloon.style.background = color;

        // Spread balloons across full screen width
        const column = i % 15;
        const leftPosition = (column * (100 / 15)) +
                             (Math.random() * 4);

        balloon.style.left = Math.min(leftPosition, 98) + "%";

        // Different flying speeds
        const duration = 6 + Math.random() * 6;

        balloon.style.animationDuration = duration + "s";

        // Stagger the launch
        balloon.style.animationDelay = (Math.random() * 4) + "s";

        balloonContainer.appendChild(balloon);

        // Remove after animation
        setTimeout(() => {
            balloon.remove();
        }, (duration + 5) * 1000);
    }
}


// CREATE CONFETTI

function createConfetti() {

    for (let i = 0; i < 160; i++) {

        const piece = document.createElement("div");

        piece.classList.add("confetti");

        const colors = [
            "#ff4f81",
            "#ffcc4d",
            "#55cf83",
            "#42bde8",
            "#a17cf4",
            "#ff914d"
        ];

        piece.style.left = Math.random() * 100 + "%";

        piece.style.background =
            colors[Math.floor(Math.random() * colors.length)];

        piece.style.width = (5 + Math.random() * 8) + "px";
        piece.style.height = (8 + Math.random() * 12) + "px";

        piece.style.animationDuration =
            (3 + Math.random() * 4) + "s";

        piece.style.animationDelay =
            Math.random() * 2 + "s";

        confettiContainer.appendChild(piece);

        setTimeout(() => {
            piece.remove();
        }, 8000);
    }
}


// START CELEBRATION

function startCelebration() {

    createBalloons();
    createConfetti();

    // Show the welcome card after balloon celebration
    setTimeout(() => {

        balloonScreen.classList.add("hide");
        welcomeCard.classList.add("show");

    }, 11000);
}


// HEART ANIMATION

function createHearts() {

    const hearts = ["❤️", "💖", "💕", "💗", "💝", "💓"];

    for (let i = 0; i < 35; i++) {

        const heart = document.createElement("span");

        heart.classList.add("floating-heart");

        heart.innerHTML =
            hearts[Math.floor(Math.random() * hearts.length)];

        heart.style.left = Math.random() * 100 + "%";

        heart.style.animationDelay =
            Math.random() * 1.5 + "s";

        heart.style.fontSize =
            (20 + Math.random() * 25) + "px";

        heartContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 4500);
    }
}


// CELEBRATE BUTTON

celebrateBtn.addEventListener("click", function () {

    celebrateBtn.style.display = "none";

    thanksMessage.style.display = "block";

    createHearts();

    // Repeat hearts for a lovely celebration
    setTimeout(createHearts, 1000);
    setTimeout(createHearts, 2000);

});


// START WHEN PAGE LOADS

window.addEventListener("load", function () {

    startCelebration();

});
