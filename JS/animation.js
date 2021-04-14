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
const speed = 120;

counters.forEach(counter => {
	const updateCount = () => {
		const target = +counter.getAttribute('data-target');
		const count = +counter.innerText;

		// Lower inc to slow and higher to slow
		const inc = target / speed;


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
	// Use of the Intersection Observer.
	const count = document.querySelector('.counter');
    const observer = new IntersectionObserver(entries=>{
	if(entries[0].isIntersecting){
		updateCount();
	}

},{threshold : 1});
observer.observe(count);
});

// About Section animation.
const column = document.querySelectorAll('.column');
const observer = new IntersectionObserver(entries=>{
	entries.forEach(entry=>{
		if(entry.isIntersecting){
			entry.target.style.animation = 'slide 2s';
			entry.target.style.opacity = '1';
		}
	})
},{threshold : 0.8});
column.forEach(cl =>{
	observer.observe(cl);
});

