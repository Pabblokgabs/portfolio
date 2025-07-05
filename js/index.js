document.addEventListener("DOMContentLoaded", () => {
	const mobileMenuButton = document.getElementById("mobile-menu-button");
	const mobileMenu = document.getElementById("mobile-menu");

	mobileMenuButton.addEventListener("click", () => {
		mobileMenu.classList.toggle("hidden");
	});

	const mobileLinks = mobileMenu.querySelectorAll("a");
	mobileLinks.forEach((link) => {
		link.addEventListener("click", () => {
			mobileMenu.classList.add("hidden");
		});
	});

	const sections = document.querySelectorAll("section");
	const navLinks = document.querySelectorAll(".nav-link");

	function highlightNavLink() {
		let scrollPosition = window.scrollY;

		sections.forEach((section) => {
			const sectionTop = section.offsetTop - 100;
			const sectionHeight = section.offsetHeight;
			const sectionId = section.getAttribute("id");

			if (
				scrollPosition >= sectionTop &&
				scrollPosition < sectionTop + sectionHeight
			) {
				navLinks.forEach((link) => {
					link.classList.remove("active");
					if (link.getAttribute("href") === `#${sectionId}`) {
						link.classList.add("active");
					}
				});
			}
		});
	}

	window.addEventListener("scroll", highlightNavLink);

	const navbar = document.querySelector("nav");

	function updateNavbar() {
		if (window.scrollY > 50) {
			navbar.classList.add("shadow-md");
			navbar.classList.remove("bg-opacity-80");
			navbar.classList.add("bg-opacity-95");
		} else {
			navbar.classList.remove("shadow-md");
			navbar.classList.remove("bg-opacity-95");
			navbar.classList.add("bg-opacity-80");
		}
	}

	window.addEventListener("scroll", updateNavbar);
});
