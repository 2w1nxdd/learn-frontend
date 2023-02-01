const tables = document.getElementById("tables");
const lists = document.getElementById("lists");
const tablesDrop = document.getElementById("tablesDrop");
const listsDrop = document.getElementById("listsDrop");

document.addEventListener("click", function (event) {
    if (!event.target.closest(".dropbtn")) {
        listsDrop.classList.remove('__active');
        tablesDrop.classList.remove('__active');
    }
});

tables.addEventListener("click", openDropdownContentTables);
lists.addEventListener("click", openDropdownContentLists);

function openDropdownContentTables(event) {
    tablesDrop.classList.toggle('__active');
    event.preventDefault();
}

function openDropdownContentLists(event) {
    listsDrop.classList.toggle('__active');
    event.preventDefault();
}

document.addEventListener("click", documentActions);

function documentActions(event) {
    const targetElement = event.target;

    if (targetElement.closest('.icon-menu')) {
        document.documentElement.classList.toggle('menu-open')
    }
}