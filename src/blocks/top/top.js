function initVideo () {
	if (window.matchMedia("(min-width: 767px)").matches) {
	// videoCont.style.backgroundColor = '#00171F';
	if (document.getElementById('backVideo')) {
		document.getElementById('backVideo').load();
		document.getElementById('backVideo').play();
	}
	
	}
};

initVideo();