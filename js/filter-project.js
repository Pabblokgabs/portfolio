document.addEventListener("DOMContentLoaded", function () {
				const filterButtons = document.querySelectorAll("#filter-btn");
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