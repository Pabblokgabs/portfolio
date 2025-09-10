import { projects } from "./data.js";

const render = document.getElementById("renderProjects");
render.innerHTML = "";
projects.forEach((item) => {
	const div = document.createElement("div");
	div.className =
		"project-card flex flex-col bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300";
	div.dataset.tags = item.dataTags;

	const topDiv = document.createElement("div");
	topDiv.className = "flex-1";

	const imgDiv = document.createElement("div");
	imgDiv.className = "h-48 overflow-hidden";
	imgDiv.innerHTML = `
		<img
			src=${item.img}
			alt=${item.title}
			class="w-full h-full object-cover object-top"
		/>
			`;
	const contentDiv = document.createElement("div");
	contentDiv.className = "p-6";

	const title = document.createElement("h3");
	title.className = "text-xl font-bold text-gray-900 mb-2";
	title.innerHTML = `${item.title}`;

	const stack = document.createElement("div");
	stack.className = "flex flex-wrap gap-2 mb-3";

	item.stackUsed.forEach((x) => {
		const span = document.createElement("span");
		span.className =
			"text-xs font-medium px-2 py-1 bg-blue-100 text-blue-700 rounded-full";
		span.innerText = `${x}`;
		stack.appendChild(span);
	});

	const desc = document.createElement("p");
	desc.className = "flex flex-wrap gap-2 mb-3";
	desc.innerHTML = `${item.description}`;

	const links = document.createElement("div");
	links.className = "flex justify-between gap-3 p-6 pt-4";

	if (!item.github && !item.liveDemo) {
		links.innerHTML = `
				<div class="flex gap-3">
					<span class="text-sm text-gray-400 italic"
						>Details available upon request</span
					>
				</div>
			`;
	}

	if (item.github) {
		const gh = document.createElement("a");
		gh.target = "_blank";
		gh.rel = "noopener noreferrer";
		gh.className = "text-gray-600 font-medium flex items-center";
		gh.href = `${item.github}`;
		gh.innerHTML = `
				<i class="ri-github-fill mr-1"></i>
				<span>GitHub</span>
			`;
		links.appendChild(gh);
	}

	if (item.liveDemo) {
		const ld = document.createElement("a");
		ld.target = "_blank";
		ld.rel = "noopener noreferrer";
		ld.className = "text-primary font-medium flex items-center";
		ld.href = `${item.liveDemo}`;
		ld.innerHTML = `
				<span>Live Demo</span>
				<i class="ri-arrow-right-line ml-1"></i>
			`;
		links.appendChild(ld);
	}

	contentDiv.appendChild(title);
	contentDiv.appendChild(stack);
	contentDiv.appendChild(desc);
	topDiv.appendChild(imgDiv);
	topDiv.appendChild(contentDiv);

	div.appendChild(topDiv);
	div.appendChild(links);
	render.appendChild(div);
});
