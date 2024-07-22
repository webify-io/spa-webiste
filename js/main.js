// Show NavBar:
const nav = document.querySelector('.nav-menu');
const toggle = document.querySelector('.nav-toggle');

toggle.onclick = function () {
	nav.classList.toggle('show-nav');
};

// Remove NavBar:
const navLink = document.querySelectorAll('.nav-link');

function linkAction() {
	const navMenu = document.querySelector('.nav-menu');

	navMenu.classList.remove('show-nav');
}
//close navBar when link clicked:
navLink.forEach((n) => n.addEventListener('click', linkAction));

// Change Active Link Color:
const linkColor = document.querySelectorAll('.nav-link');

function colorLink() {
	if (linkColor) {
		linkColor.forEach((L) => L.classList.remove('active'));
		this.classList.add('active');
	}
}
linkColor.forEach((L) => L.addEventListener('click', colorLink));

// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
	sections.forEach((sec) => {
		let top = window.scrollY;
		let offset = sec.offsetTop - 100;
		let height = sec.offsetHeight;
		let id = sec.getAttribute('id');

		if (top >= offset && top < offset + height) {
			//active navbar links
			navLinks.forEach((links) => {
				links.classList.remove('active');
				document
					.querySelector('header nav a[href*=' + id + ']')
					.classList.add('active');
			});

			// active sections for animation on scroll
		}
		// if want to use animation that repeats on scroll use this
	});
};

// Change header background when scrolling down
function scrollHeader() {
	const scrollHeader = document.getElementById('header');
	if (this.scrollY >= 200) {
		scrollHeader.classList.add('scroll-header');
	} else {
		scrollHeader.classList.remove('scroll-header');
	}
}
window.addEventListener('scroll', scrollHeader);

/* =================== REMOVE BOTTOM SCROLL ICON =================== */
// Make the footer-scroll icon to become visible only after a certain scroll position
window.addEventListener('scroll', function () {
	var footerIconTop = document.querySelector('.footer-iconTop');
	footerIconTop.classList.toggle('active', window.scrollY > -100);
	footerIconTop.classList.toggle('hidden', window.scrollY <= 0);
});
