document.addEventListener("DOMContentLoaded", () => {
	const fadeElements = document.querySelectorAll(".section-fade");
	const backToTopButton = document.getElementById("back-to-top");

	function checkFade() {
		fadeElements.forEach((element) => {
			const elementTop = element.getBoundingClientRect().top;
			const windowHeight = window.innerHeight;

			if (elementTop < windowHeight - 100) {
				element.classList.add("visible");
			}
		});

		if (window.scrollY > 500) {
			backToTopButton.classList.remove("opacity-0", "invisible");
			backToTopButton.classList.add("opacity-100", "visible");
		} else {
			backToTopButton.classList.remove("opacity-100", "visible");
			backToTopButton.classList.add("opacity-0", "invisible");
		}
	}

	checkFade();

	window.addEventListener("scroll", checkFade);

	backToTopButton.addEventListener("click", () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	});

	document.querySelectorAll('a[href="#"]').forEach((anchor) => {
		anchor.addEventListener("click", (e) => {
			e.preventDefault();

			const targetId = this.getAttribute("href");
			if (targetId === "#") return;

			const targetElement = document.querySelector(targetId);
			if (targetElement) {
				window.scrollTo({
					top: targetElement.offsetTop - 80,
					behavior: "smooth",
				});
			}
		});
	});
});