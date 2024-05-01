var menu = document.querySelector("nav");
var menuicon = document.querySelector(".menu-icon");
var closeicon = document.querySelector(".close-icon");

menuicon.addEventListener('click', () => {
    menu.classList.add('active')
})
closeicon.addEventListener('click', () => {
    menu.classList.remove('active')
})