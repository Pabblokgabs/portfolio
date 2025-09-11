document.addEventListener("DOMContentLoaded", () => {
	const typingElement = document.getElementById("typing-text");
	const phrases = [
		"React Developer",
		"TypeScript Enthusiast",
		"Node.js Developer",
		"Problem Solver",
		"UI/UX Enthusiast",
		"Mobile Developer",
		"Python Developer",
	];

	let phraseIndex = 0;
	let charIndex = 0;
	let isDeleting = false;
	let typingSpeed = 100;

	function typeText() {
		const currentPhrase = phrases[phraseIndex];

		if (isDeleting) {
			typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
			charIndex--;
			typingSpeed = 50;
		} else {
			typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
			charIndex++;
			typingSpeed = 100;
		}

		if (!isDeleting && charIndex === currentPhrase.length) {
			isDeleting = true;
			typingSpeed = 1000;
		} else if (isDeleting && charIndex === 0) {
			isDeleting = false;
			phraseIndex = (phraseIndex + 1) % phrases.length;
			typingSpeed = 500;
		}

		setTimeout(typeText, typingSpeed);
	}

	typeText();

	const options = {
		threshold: 0.2,
	};

	const observer = new IntersectionObserver((entries, observer) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				const el = entry.target;
				el.classList.remove("opacity-0");

				if (el.classList.contains("fade-in-left")) {
					el.classList.remove("translate-x-[-100px]");
				} else if (el.classList.contains("fade-in-right")) {
					el.classList.remove("translate-x-[100px]");
				} else if (el.classList.contains("fade-in-down")) {
					el.classList.remove("translate-y-[-100px]");
				} else if (el.classList.contains("fade-in-up")) {
					el.classList.remove("translate-y-[100px]");
				}

				observer.unobserve(el);
			}
		});
	}, options);
	document
		.querySelectorAll(
			".fade-in-left, .fade-in-right, .fade-in-down, .fade-in-up"
		)
		.forEach((el) => {
			observer.observe(el);
		});
});
