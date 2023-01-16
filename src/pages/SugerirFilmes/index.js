function openMenu() {
	let menu = document.getElementById("menuMobile");
	if (menu.style.display === "none") menu.style.display = "block";
	else menu.style.display = "none";
}

const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");
const menu = document.getElementById("optionsMenu");

btn.addEventListener("click", () => {
	alert("test");
	btn.classList.toggle("open");
	nav.classList.toggle("flex");
	nav.classList.toggle("hidden");
	menu.style.display = "block";
});
