document.addEventListener("DOMContentLoaded", () => {
	const contactForm = document.getElementById("contact-form");

	const inputs = ["name", "email", "message"].map((id) =>
		document.getElementById(id)
	);

	inputs.forEach((input) => {
		input.addEventListener("input", () => {
			input.classList.remove("border-red-400");
		});
	});

	function showToast(message, type = "success") {
		const toast = document.createElement("div");

		const bgColor =
			type === "success"
				? "bg-green-500"
				: type === "error"
				? "bg-red-500"
				: "bg-gray-700";

		toast.className = `${bgColor} text-white px-4 py-3 rounded shadow-md animate-slide-in-right`;
		toast.innerText = message;

		const container = document.getElementById("toast-container");
		container.appendChild(toast);

		setTimeout(() => {
			toast.classList.add("animate-fade-out");
			setTimeout(() => toast.remove(), 300);
		}, 3000);
	}

	contactForm.addEventListener("submit",  (e) => {
		e.preventDefault();

		let hasError = false;

		inputs.forEach((input) => {
			if (!input.value.trim()) {
				input.classList.add("border-red-400");
				hasError = true;
			}
		});

		if (hasError) {
			showToast("Please fill in all required fields.", "error");
			return;
		}

		const email = document.getElementById("email");

		const emailRegex =
			/^(?:[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*|"[^"\\]*(\\.[^"\\]*)*")@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/i;

		if (!emailRegex.test(email.value.trim())) {
			email.classList.add("border-red-400");
			showToast("Please enter a valid email address.", "error");
			return;
		}

		const submitButton = contactForm.querySelector('button[type="submit"]');
		const originalText = submitButton.innerHTML;

		submitButton.disabled = true;
		submitButton.innerHTML =
			'<i class="ri-loader-4-line animate-spin mr-2"></i> Sending...';

		setTimeout(() => {
			showToast(
				"Thank you for your message! I’ll get back to you soon.",
				"success"
			);
			contactForm.reset();
			submitButton.disabled = false;
			submitButton.innerHTML = originalText;
		}, 1500);
	});
});
