document.addEventListener("DOMContentLoaded", () => {
	const form = document.getElementById("application-form");
	const tableBody = document.getElementById("application-table-body");
	const totalCountEl = document.getElementById("total-count");
	const interviewCountEl = document.getElementById("interview-count");
	const offerCountEl = document.getElementById("offer-count");
	const rejectionCountEl = document.getElementById("rejection-count");
	const themeToggleBtn = document.getElementById("theme-toggle");
	const themeIcon = document.getElementById("theme-icon");

	function applyTheme(theme) {
		if (theme === "dark") {
			document.body.classList.add("dark");
			themeIcon.textContent = "☀️";
		} else {
			document.body.classList.remove("dark");
			themeIcon.textContent = "🌙";
		}
	}

	const savedTheme = localStorage.getItem("theme") || "dark";
	applyTheme(savedTheme);

	themeToggleBtn.addEventListener("click", () => {
		const isDark = document.body.classList.contains("dark");
		const newTheme = isDark ? "light" : "dark";
		localStorage.setItem("theme", newTheme);
		applyTheme(newTheme);
	});

	let applications = JSON.parse(localStorage.getItem("applications")) || [];

	function saveData() {
		localStorage.setItem("applications", JSON.stringify(applications));
	}

	function updateDashboard() {
		const total = applications.length;
		const interviews = applications.filter((app) => app.stage === "Interview")
			.length;
		const offers = applications.filter((app) => app.stage === "Offer").length;
		const rejections = applications.filter(
			(app) => app.stage === "Rejected" || app.result === "Rejected",
		).length;

		totalCountEl.textContent = total;
		interviewCountEl.textContent = interviews;
		offerCountEl.textContent = offers;
		rejectionCountEl.textContent = rejections;
	}

	function getBadgeClass(type, value) {
		if (type === "stage") {
			if (value === "Offer") return "badge green";
			if (value === "Rejected") return "badge red";
			return "badge blue";
		}

		if (type === "result") {
			if (value === "Cleared") return "badge green";
			if (value === "Rejected") return "badge red";
			return "badge gray";
		}

		return "badge gray";
	}

	function renderTable() {
		tableBody.innerHTML = "";

		if (applications.length === 0) {
			const row = document.createElement("tr");
			row.innerHTML =
				'<td colspan="6" class="empty">No applications found. Start tracking your journey!</td>';
			tableBody.appendChild(row);
			updateDashboard();
			return;
		}

		const sortedApps = [...applications].sort(
			(a, b) => new Date(b.date) - new Date(a.date),
		);

		sortedApps.forEach((app) => {
			const row = document.createElement("tr");
			row.innerHTML = `
				<td>${app.company}</td>
				<td>${app.role}</td>
				<td><span class="${getBadgeClass("stage", app.stage)}">${
				app.stage
			}</span></td>
				<td><span class="${getBadgeClass("result", app.result)}">${
				app.result
			}</span></td>
				<td>${new Date(app.date).toLocaleDateString()}</td>
				<td class="right">
					<button class="delete-btn" data-id="${app.id}">Delete</button>
				</td>
			`;
			tableBody.appendChild(row);
		});

		updateDashboard();
	}

	tableBody.addEventListener("click", (event) => {
		const button = event.target.closest(".delete-btn");
		if (!button) return;

		const id = Number(button.dataset.id);
		const confirmDelete = confirm(
			"Are you sure you want to delete this application?",
		);
		if (!confirmDelete) return;

		applications = applications.filter((app) => app.id !== id);
		saveData();
		renderTable();
	});

	form.addEventListener("submit", (event) => {
		event.preventDefault();

		const newApp = {
			id: Date.now(),
			company: document.getElementById("company").value.trim(),
			role: document.getElementById("role").value.trim(),
			stage: document.getElementById("stage").value,
			result: document.getElementById("result").value,
			date: document.getElementById("date").value,
		};

		applications.push(newApp);
		saveData();
		renderTable();

		form.reset();
		document.getElementById("date").valueAsDate = new Date();
	});

	document.getElementById("date").valueAsDate = new Date();
	renderTable();
});
