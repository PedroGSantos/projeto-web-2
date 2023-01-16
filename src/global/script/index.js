function openMenu() {
	const btn = document.getElementById("menu-btn");
	const nav = document.getElementById("menu");
	const menu = document.getElementById("optionsMenu");

	btn.classList.toggle("open");
	nav.classList.toggle("flex");
	nav.classList.toggle("hidden");
	if (menu.style.display == "block") menu.style.display = "none";
	else menu.style.display = "block";
}
