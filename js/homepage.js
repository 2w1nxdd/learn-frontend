"use strict"

document.addEventListener("click", documentActions);

function documentActions(event) {
    const targetElement = event.target;

    if (targetElement.closest('.icon-menu')) {
        document.documentElement.classList.toggle('menu-open')
    }
}