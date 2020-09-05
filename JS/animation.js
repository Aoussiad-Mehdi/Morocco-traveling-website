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
});
// The animated counter .
const counters = document.querySelectorAll('.counter');
const speed = 170;

counters.forEach(counter => {
	const updateCount = () => {
		const target = +counter.getAttribute('data-target');
		const count = +counter.innerText;

		// Lower inc to slow and higher to slow
		const inc = target / speed;

		// console.log(inc);
		// console.log(count);

		// Check if target is reached
		if (count < target) {
			// Add inc to count and output in counter
			counter.innerText = Math.ceil(count + inc);
			// Call function every ms
			setTimeout(updateCount, 40);
		} else {
			counter.innerText = target;
		}
    }
    updateCount();
});
