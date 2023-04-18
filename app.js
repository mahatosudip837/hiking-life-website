let open_menu = document.querySelector('.open-menu i');
let close_menu = document.querySelector('.close-menu i');
let navbar = document.querySelector('.navbar ul')
console.log(navbar);

open_menu.addEventListener('click',()=>{
    navbar.classList.add('active');
})
close_menu.addEventListener('click',()=>{
    navbar.classList.remove('active');
})