// here we go again.
// cursor animation.
const cursort = document.querySelector('.animated-cursor');
window.addEventListener('scroll',function(){
    if(window.scrollY > 100){
        cursort.style.display= 'none';
    }
    else{
        cursort.style.display= 'block';
    }
})