'use strict';

/**Optionally add Bootstrap to your project**/
//import 'bootstrap';

import '../css/style.scss';


// Toggle Navbar 

let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function () {
    mainNav.classList.toggle('active');
});

// show and hide navbar

if (window.pageYOffset === 0) {
    document.querySelector(".nav-bar").classList.add("top-nav");
} else {
    document.querySelector(".nav-bar").classList.remove("top-nav");
}


let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;

    if (currentScrollPos === 0) {
        document.querySelector(".nav-bar").classList.add("top-nav");
    } else if (prevScrollpos > currentScrollPos) {
        document.querySelector(".nav-bar").style.top = "0";
        document.querySelector(".nav-bar").classList.remove("top-nav");

    } else {
        document.querySelector(".nav-bar").style.top = "-100px";
        document.querySelector(".nav-bar").classList.remove("top-nav");
    }

    prevScrollpos = currentScrollPos;
}


//Typing text

let charArray = "web and mobile.".split("");
let spanElement = document.querySelector(".typing-text");

let i = 0;
let txt = 'Web and Mobile'; /* The text */
let speed = 250; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
    if (i < txt.length) {
        document.querySelector(".typing-text").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else if (i === txt.length) {
        i = 0;
        document.querySelector(".typing-text").innerHTML = "";
        setTimeout(typeWriter, 1000);

    }
}

document.onload(typeWriter());

