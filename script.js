// Sticky Navbar
let header = document.querySelector("header");
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
	header.classList.toggle("shadow", window.scrollY > 0);
});

menu.onclick = () => {
	navbar.classList.toggle("active");
};
window.onscroll = () => {
	navbar.classList.remove("active");
};

// Hiding Navbar
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
	var currentScrollPos = window.pageYOffset;
	if (prevScrollpos > currentScrollPos) {
		document.getElementById("navbar").style.top = "0";
	} else {
		document.getElementById("navbar").style.top = "-72px";
	}
	prevScrollpos = currentScrollPos;
};
// Nav links auto hide on click
navLinks.forEach((link) => {
	link.addEventListener("click", () => {
		navbar.classList.remove("active");
	});
});
