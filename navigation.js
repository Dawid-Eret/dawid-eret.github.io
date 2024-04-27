const navDivTop = document.getElementById('navDivTop');
const navTop = document.getElementById('navTop');
navTop.addEventListener('click', () => {
    navPress(navDivTop);
});

const navDivProjects = document.getElementById('navDivProjects');
const navProjects = document.getElementById('navProjects');
navProjects.addEventListener('click', () => {
    navPress(navDivProjects);
});

const navDivEducation = document.getElementById('navDivEducation');
const navEducation = document.getElementById('navEducation');
navEducation.addEventListener('click', () => {
    navPress(navDivEducation);
});

const navDivExperience = document.getElementById('navDivExperience');
const navExperience = document.getElementById('navExperience');
navExperience.addEventListener('click', () => {
    navPress(navDivExperience);
});

const navDivAbout = document.getElementById('navDivAbout');
const navAbout = document.getElementById('navAbout');
navAbout.addEventListener('click', () => {
    navPress(navDivAbout);
});

function navPress(navDiv) {
    document.getElementById(navDiv.id).style.backgroundColor = "rgb(20, 30, 44)";

    if(navDiv !== navDivTop) {
        document.getElementById(navDivTop.id).style.backgroundColor = "rgb(0, 10, 24)";
    }

    if(navDiv !== navDivProjects) {
        document.getElementById(navDivProjects.id).style.backgroundColor = "rgb(0, 10, 24)";
    }

    if(navDiv !== navDivEducation) {
        document.getElementById(navDivEducation.id).style.backgroundColor = "rgb(0, 10, 24)";
    }

    if(navDiv !== navDivExperience) {
        document.getElementById(navDivExperience.id).style.backgroundColor = "rgb(0, 10, 24)";
    }

    if(navDiv !== navDivAbout) {
        document.getElementById(navDivAbout.id).style.backgroundColor = "rgb(0, 10, 24)";
    }
}
