(() => {
	// variables at the top -> elemnts on the page we need to work with
	let sigilButtons = document.querySelectorAll('.sigilContainer'),
		lightBox = document.querySelector(".lightbox"),
		gotVideo = lightBox.querySelector(".video-player"),
		closeLightBox = lightBox.querySelector(".lightbox-close");

	// events go in the middle
	function showLightbox() {
		// pop open a lightbox here and show some content
		// start with a video
		// debugger;
		lightBox.classList.add('show-lightbox');

		gotVideo.play();
	}

	function hideLightBox() {
		lightBox.classList.remove("show-lightbox");

		gotVideo.pause();
		gotVideo.currentTime = 0;
	}

	// add a click event to the sigilButtons
	sigilButtons.forEach(button => button.addEventListener("click", showLightbox))

	// add an event handler for the lightbox close button
	closeLightBox.addEventListener("click", hideLightBox);
})();