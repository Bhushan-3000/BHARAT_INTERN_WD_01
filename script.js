let menu = document.querySelector('.ri-menu-line');
let navbar = document.querySelector('.navbar');
    
menu.onclick = () => {
menu.classList.toggle('bx-x');
navbar.classList.toggle('open');
}