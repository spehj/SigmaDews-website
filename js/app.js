const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');
// Display mobile menu
const mobileMenu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}

menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling
const highLightMenu = () =>{
    const elem = document.querySelector('.highlight');
    const homeMenu = document.querySelector('#home-page');
    const aboutMenu = document.querySelector('#about-page');
    const solutionsMenu = document.querySelector('#solutions-page');

    let scrollPosition = window.scrollY;
    //console.log(scrollPosition);

    // adds 'highlight' class to the menu items

    if (window.innerWidth  > 960 && scrollPosition < 600){
        aboutMenu.classList.remove('highlight');
        homeMenu.classList.add('highlight');
        return; 
    }
    else if (window.innerWidth  > 960 && scrollPosition < 1400){
        homeMenu.classList.remove('highlight');
        solutionsMenu.classList.remove('highlight');
        aboutMenu.classList.add('highlight');
        return; 
    }
    else if (window.innerWidth  > 960 && scrollPosition < 2345){
        aboutMenu.classList.remove('highlight');
        solutionsMenu.classList.add('highlight');
        return; 
    }

    if((elem && window.innerWidth < 960 && scrollPosition <600) || elem){
        elem.classList.remove('highlight');
    }
}

window.addEventListener('scroll', highLightMenu);
window.addEventListener('click', highLightMenu);


const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active');
    if (window.innerWidth <= 768 && menuBars){
        menu.classList.toggle('is-active');
        menuLinks.classList.remove('active');
    }
}

menuLinks.addEventListener('click', hideMobileMenu);
