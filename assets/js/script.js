import './bootstrap';
import '../css/app.css'


let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('.header-2');



var MenuItems = document.getElementById("MenuItems");
MenuItems.style.maxHeight = "0px";

function menutoggle() {
    if (MenuItems.style.maxHeight = "0px") {
        MenuItems.style.maxHeight = "50px";
    } else {
        MenuItems.style.maxHeight = "0px";
    }
}

/*************Menuitems JS***************/

/*************Dark-theme start JS*********

var settingsmenu = document.querySelector(".settings-menu");

function settingsMenuToggle() {
    settingsmenu.classList.toggle("settings-menu-height");
}

*/
var darkBtn = document.getElementById("dark-btn");

darkBtn.onclick = function () {
    darkBtn.classList.toggle("dark-btn-on");
    document.body.classList.toggle("dark-theme");
    if (localStorage.getItem("theme" == "light")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
    if (localStorage.getItem("theme" == "light")) {
        darkBtn.classList.remove("dark-btn-on");
        document.body.classList.remove("dark-theme");
    } else if (localStorage.getItem("theme" == "dark")) {
        darkBtn.classList.add("dark-btn-on");
        document.body.classList.add("dark-theme");
    } else {
        localStorage.setItem("theme", "light");
    }
}