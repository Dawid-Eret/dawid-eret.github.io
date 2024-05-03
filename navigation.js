const navbar = document.getElementById("navbar");

function navButtonAppend(name, href) {
    const nav = document.createElement("a");
    nav.textContent = name;
    nav.href = href;
    nav.classList.add("nav-button");
    nav.addEventListener("click", shootConfetti);
    navbar.appendChild(nav);
}

function navbarInitialise() {
    navButtonAppend("TOP", "#image-top");
    navButtonAppend("PROJECTS", "#div-projects");
}

navbarInitialise();

function shootConfetti() {
    confetti({
        angle: 270,
        origin: {
            x: 0.5,
            y: -1
        },
        spread: 270,
        particleCount: 200,
        startVelocity: 150,
        flat: true,
        zIndex: 9,
        colors: ["#FFFFFF"],
        ticks: 100
    });
}