// Here we go again .
const content = document.querySelector('.dropdown-content');
const dropBtn = document.querySelector('.drop-btn');
const dropBtn1 = document.querySelector('.drop-btn1');
const dropBtn2 = document.querySelector('.drop-btn2');
const dropIcon = document.querySelector('.dropdown i');
/* I tried to set display none for the dropdown content in css but i didn't know why
it doesn't work, So i did here in Javascript. */
content.style.background = 'transparent';
content.style.border = 'none';
dropBtn.style.display = 'none';
dropBtn1.style.display = 'none';
dropBtn2.style.display = 'none';

// This function is for the dropdown link (places).
function dropdown1(){
    content.style.background = '#fff';
    content.style.border = '1px solid #000';
    dropBtn.style.display = 'block';
    dropBtn1.style.display = 'block';
    dropBtn2.style.display = 'block';
    dropIcon.className = 'fas fa-chevron-up';
};
// This function is for the dropdown link (places).
function dropdown2(){
    content.style.background = 'transparent';
    content.style.border = 'none';
    dropBtn.style.display = 'none';
    dropBtn1.style.display = 'none';
    dropBtn2.style.display = 'none';
    dropIcon.className = 'fas fa-chevron-down';
};
// navbar in mobile view.
const navbar = document.querySelector('nav');
const togle = document.querySelector('.toggle button');
const icon = document.querySelector('.toggle button i');
togle.addEventListener('click', function(){
    navbar.classList.toggle('actif');
    navbar.style.top = '80px';
    if(navbar.classList != 'navbar'){
        icon.className = 'fas fa-times';
    }
    else{
        icon.className = 'fas fa-bars';
    }
});
// This removes the mobile navbar when clicking on nav-links.
function removeNav(){
    navbar.classList.remove('actif');
    icon.className = 'fas fa-bars';
}

// Changing header background on scroll.
// also showing the about section while scrolling.
const header = document.querySelector('header');
const about = document.getElementById('about');

window.addEventListener('scroll', function(){
    if(window.scrollY > 80){
        header.classList.add('sticky');
        about.style.opacity = '1';
    }
    else{
        header.classList.remove('sticky');
        about.style.opacity = '0';
    }
});



