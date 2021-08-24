document.getElementById("toTopButton").onclick = function() {
	document.querySelector('.main').scrollIntoView({block: 'start',behavior: 'smooth' });
};