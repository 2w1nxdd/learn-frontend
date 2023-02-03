"use strict"

document.addEventListener("click", documentActions);

function documentActions(event) {
    const targetElement = event.target;

    if (targetElement.closest('.icon-menu')) {
        document.documentElement.classList.toggle('menu-open')
    }
}

function scrollToCourses() {
    let element = document.querySelector('.courses__row');
    element.scrollIntoView({ behavior: "smooth", });
}