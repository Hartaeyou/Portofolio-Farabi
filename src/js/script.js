// navbar Fixed
window.onscroll = function(){
    const header = document.querySelector('header');
    const fixed_navbar = header.offsetTop;

    if(window.pageYOffset > fixed_navbar) {
        header.classList.add('navbar-fixed');
    }
    else{
        header.classList.remove('navbar-fixed');
    }
};
// Hamburger
const hamburger = document.querySelector('#hamburger');
const navbar_menu = document.querySelector('#nav-menu');

hamburger. addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active')
    navbar_menu.classList.toggle('hidden');
});