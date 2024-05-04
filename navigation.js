const navbar = document.getElementById("navbar");

function navButtonAppend(name, href) {
    const nav = document.createElement("a");
    nav.textContent = name;
    nav.href = href;
    nav.classList.add("nav-button");
    nav.addEventListener("click", () => {
        shootConfetti(0, 315);
        shootConfetti(1, 225);
    });
    navbar.appendChild(nav);
}

function navbarInitialise() {
    navButtonAppend("TOP", "#div-top");
    navButtonAppend("PROJECTS", "#div-projects");
    navButtonAppend("EDUCATION", "#div-education");
}

navbarInitialise();

function shootConfetti(xpos, angle) {
    confetti({
        angle: angle,
        origin: {
            x: xpos,
            y: 0
        },
        spread: 90,
        particleCount: 90,
        startVelocity: 80,
        gravity: -1,
        flat: true,
        zIndex: 9,
        colors: ["FFFFFF", "AAAAAA", "555555"],
        ticks: 100,
        scalar: 0.3,
        decay: 0.91,
        shapes: ["square"]
    });
}