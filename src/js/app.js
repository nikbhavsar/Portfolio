'use strict';

/**Optionally add Bootstrap to your project**/
//import 'bootstrap';

import '../css/style.scss';


/********** Paste your code here! ************/


let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function () {
    mainNav.classList.toggle('active');
});

// show and hide navbar


let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;

   
    if (prevScrollpos > currentScrollPos) {
        document.querySelector(".nav-bar").style.top = "0";
    } else {
        document.querySelector(".nav-bar").style.top = "-100px";
    }

   
    prevScrollpos = currentScrollPos;
}