const sideMenu = document.querySelector('.side-menu');
const closeBar = document.querySelector('.close-bar');
const openBar = document.querySelector('.open-bar');

const openMenu = () => {
    sideMenu.classList.toggle('menu-reveal', true);
    openBar.style.visibility='hidden';
}

const closeMenu = () => {
    sideMenu.classList.toggle('menu-reveal', false);
    openBar.style.visibility='visible';
}

openBar.addEventListener('click', openMenu);
closeBar.addEventListener('click', closeMenu);
     
    
