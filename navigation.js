const navDivTop = document.getElementById('navDivTop');
const navTop = document.getElementById('navTop');
navTop.addEventListener('click', () => { navPress(navDivTop); });

const navDivProjects = document.getElementById('navDivProjects');
const navProjects = document.getElementById('navProjects');
navProjects.addEventListener('click', () => { navPress(navDivProjects); });

const navDivEducation = document.getElementById('navDivEducation');
const navEducation = document.getElementById('navEducation');
navEducation.addEventListener('click', () => { navPress(navDivEducation); });

const navDivExperience = document.getElementById('navDivExperience');
const navExperience = document.getElementById('navExperience');
navExperience.addEventListener('click', () => { navPress(navDivExperience); });

const navDivAbout = document.getElementById('navDivAbout');
const navAbout = document.getElementById('navAbout');
navAbout.addEventListener('click', () => { navPress(navDivAbout); });

function navPress(navDiv) {
    var selected = document.getElementsByClassName("selected");

    if (selected.length > 0) {
        selected[0].classList.remove("selected");
    }

    navDiv.classList.add("selected");
}
