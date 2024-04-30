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

const hambNavList = document.getElementsByClassName('hambNavList');
const hamburgerButton = document.getElementById("navDivHamburger");
hamburgerButton.addEventListener('click', hamburgerPress);
var navSwitch = true;
hambNavList[0].style.display = 'none';
hambNavList[1].style.display = 'none';
hambNavList[2].style.display = 'none';
hambNavList[3].style.display = 'none';
hambNavList[4].style.display = 'none';

const navDivTopM = document.getElementById('navDivTopM');
navDivTopM.addEventListener('click', hamburgerPress);
const navDivProjectsM = document.getElementById('navDivProjectsM');
navDivProjectsM.addEventListener('click', hamburgerPress);
const navDivEducationM = document.getElementById('navDivEducationM');
navDivEducationM.addEventListener('click', hamburgerPress);
const navDivExperienceM = document.getElementById('navDivExperienceM');
navDivExperienceM.addEventListener('click', hamburgerPress);
const navDivAboutM = document.getElementById('navDivAboutM');
navDivAboutM.addEventListener('click', hamburgerPress);

function navPress(navDiv) {
    var selected = document.getElementsByClassName("selected");

    if (selected.length > 0) {
        selected[0].classList.remove("selected");
    }

    navDiv.classList.add("selected");
}

function hamburgerPress() {
    if (navSwitch) {
        hambNavList[0].style.display = 'unset';
        hambNavList[1].style.display = 'unset';
        hambNavList[2].style.display = 'unset';
        hambNavList[3].style.display = 'unset';
        hambNavList[4].style.display = 'unset';
        navSwitch = false;
    } else {
        hambNavList[0].style.display = 'none';
        hambNavList[1].style.display = 'none';
        hambNavList[2].style.display = 'none';
        hambNavList[3].style.display = 'none';
        hambNavList[4].style.display = 'none';
        navSwitch = true;
    }
}
