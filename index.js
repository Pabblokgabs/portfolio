document.addEventListener("DOMContentLoaded", function () {
				// Mobile menu toggle
				const mobileMenuButton = document.getElementById("mobile-menu-button");
				const mobileMenu = document.getElementById("mobile-menu");

				mobileMenuButton.addEventListener("click", function () {
					mobileMenu.classList.toggle("hidden");
				});

				// Close mobile menu when clicking on a link
				const mobileLinks = mobileMenu.querySelectorAll("a");
				mobileLinks.forEach((link) => {
					link.addEventListener("click", function () {
						mobileMenu.classList.add("hidden");
					});
				});

				// Highlight active nav link based on scroll position
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

				// Change navbar style on scroll
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
		

      document.addEventListener("DOMContentLoaded", function () {
				const typingElement = document.getElementById("typing-text");
				const phrases = [
					"React Developer",
					"TypeScript Enthusiast",
					"Node.js Developer",
					"Problem Solver",
					"UI/UX Enthusiast",
				];

				let phraseIndex = 0;
				let charIndex = 0;
				let isDeleting = false;
				let typingSpeed = 100;

				function typeText() {
					const currentPhrase = phrases[phraseIndex];

					if (isDeleting) {
						typingElement.textContent = currentPhrase.substring(
							0,
							charIndex - 1
						);
						charIndex--;
						typingSpeed = 50;
					} else {
						typingElement.textContent = currentPhrase.substring(
							0,
							charIndex + 1
						);
						charIndex++;
						typingSpeed = 100;
					}

					if (!isDeleting && charIndex === currentPhrase.length) {
						isDeleting = true;
						typingSpeed = 1000; // Pause at end of phrase
					} else if (isDeleting && charIndex === 0) {
						isDeleting = false;
						phraseIndex = (phraseIndex + 1) % phrases.length;
						typingSpeed = 500; // Pause before typing next phrase
					}

					setTimeout(typeText, typingSpeed);
				}

				typeText();
			});
		

      document.addEventListener("DOMContentLoaded", function () {
				const filterButtons = document.querySelectorAll(".filter-btn");
				const projectCards = document.querySelectorAll(".project-card");

				filterButtons.forEach((button) => {
					button.addEventListener("click", function () {
						const filter = this.getAttribute("data-filter");

						// Update active button
						filterButtons.forEach((btn) => {
							btn.classList.remove("active", "bg-primary", "text-white");
							btn.classList.add("bg-gray-200", "text-gray-700");
						});
						this.classList.add("active", "bg-primary", "text-white");
						this.classList.remove("bg-gray-200", "text-gray-700");

						// Filter projects
						projectCards.forEach((card) => {
							if (filter === "all") {
								card.style.display = "block";
							} else {
								const tags = card.getAttribute("data-tags");
								if (tags.includes(filter)) {
									card.style.display = "block";
								} else {
									card.style.display = "none";
								}
							}
						});
					});
				});
			});
		

      document.addEventListener("DOMContentLoaded", function () {
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

					// Back to top button visibility
					if (window.scrollY > 500) {
						backToTopButton.classList.remove("opacity-0", "invisible");
						backToTopButton.classList.add("opacity-100", "visible");
					} else {
						backToTopButton.classList.remove("opacity-100", "visible");
						backToTopButton.classList.add("opacity-0", "invisible");
					}
				}

				// Initial check
				checkFade();

				// Check on scroll
				window.addEventListener("scroll", checkFade);

				// Back to top button functionality
				backToTopButton.addEventListener("click", function () {
					window.scrollTo({
						top: 0,
						behavior: "smooth",
					});
				});

				// Smooth scroll for anchor links
				document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
					anchor.addEventListener("click", function (e) {
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
		

      document.addEventListener("DOMContentLoaded", function () {
				const contactForm = document.getElementById("contact-form");

				contactForm.addEventListener("submit", function (e) {
					e.preventDefault();

					// Get form values
					const name = document.getElementById("name").value;
					const email = document.getElementById("email").value;
					const subject = document.getElementById("subject").value;
					const message = document.getElementById("message").value;

					// Basic validation
					if (!name || !email || !message) {
						alert("Please fill in all required fields.");
						return;
					}

					// Email validation
					const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
					if (!emailRegex.test(email)) {
						alert("Please enter a valid email address.");
						return;
					}

					// Simulate form submission
					const submitButton = contactForm.querySelector(
						'button[type="submit"]'
					);
					const originalText = submitButton.innerHTML;

					submitButton.disabled = true;
					submitButton.innerHTML =
						'<i class="ri-loader-4-line animate-spin mr-2"></i> Sending...';

					// Simulate API call
					setTimeout(() => {
						alert("Thank you for your message! I will get back to you soon.");
						contactForm.reset();
						submitButton.disabled = false;
						submitButton.innerHTML = originalText;
					}, 1500);
				});
			});
		