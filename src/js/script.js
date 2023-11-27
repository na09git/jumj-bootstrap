import './bootstrap';
import '../css/app.css'

// Carousel Ends     Initialization for ES Users

let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('.header-2');

/*************Menuitems JS***************/

/*************Dark-theme start JS*********

var settingsmenu = document.querySelector(".settings-menu");

function settingsMenuToggle() {
    settingsmenu.classList.toggle("settings-menu-height");
}

*/
var settingsmenu = document.querySelector(".settings-menu");

function settingsMenuToggle() {
    settingsmenu.classList.toggle("settings-menu-height");
}

var darkBtn = document.getElementById("dark-btn");

darkBtn.onclick = function () {
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");

    if (localStorage.getItem("theme" == "light")) {
        darkBtn.classList.remove("dark-btn-on");
        document.body.classList.remove("dark-theme");
    } else if (localStorage.getItem("theme" == "dark")) {
        darkBtn.classList.add("dark-btn-on");
        document.body.classList.add("dark-theme");
    } else {
        localStorage.setItem("theme", "light")
    }
}