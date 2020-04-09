$(function(){
    $('.slider').slick({
        arrows: false,
        dots: true,
        fade: true,
        autoplay: 3000
    })
});

const menuBtn = document.querySelector('.header-btn');
const closeMenuBtn = document.querySelector('.close-btn');
const menu = document.querySelector('.menu');
const upBtn = document.querySelector('.up-btn');
const navLinks = document.querySelectorAll('.nav-link');


menuBtn.addEventListener('click', showMenu);
closeMenuBtn.addEventListener('click', closeMenu);
upBtn.addEventListener('click', () => scrollTo(0, 0));

navLinks.forEach(link => link.addEventListener('click', closeMenu));

window.addEventListener('scroll', toggleUpBtn);


function showMenu() {
    menu.classList.toggle('active');
}

function closeMenu() {
    menu.classList.remove('active');
}

function toggleUpBtn() {
    if (scrollY > 500) {
        upBtn.classList.remove('hidden');
    } else {
        upBtn.classList.add('hidden');
    }
}