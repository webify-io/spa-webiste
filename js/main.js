/* ======================= MENU SHOW Y HIDDEN ====================== */
const navMenu = document.getElementById('nav-menu'),
	navToggle = document.getElementById('nav-toggle');
/* 	navClose = document.getElementById('nav-close'); */

/* ========== MENU SHOW ========== */
/* = Validate if constant exists = */
if (navToggle) {
	navToggle.addEventListener('click', () => {
		navMenu.classList.toggle('show-menu');
	});
}
/* ========= MENU HIDDEN ========= */
/* = Validate if constant exists = */
/* if (navClose) {
	navClose.addEventListener('click', () => {
		navMenu.classList.remove('show-menu');
	});
}
 */
/* ====================== REMOVE MENU MOBILE ======================= */
const navLink = document.querySelectorAll('.nav-link');

function linkAction() {
	const navMenu = document.getElementById('nav-menu');
	// When we click on each nav-link, we remove the show-menu class
	navMenu.classList.remove('show-menu');
}
navLink.forEach((n) => n.addEventListener('click', linkAction));

/* // Show NavBar:
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
linkColor.forEach((L) => L.addEventListener('click', colorLink)); */

// Change Active Link Color:
const linkColor = document.querySelectorAll('.nav-link');

function colorLink() {
	if (linkColor) {
		linkColor.forEach((L) => L.classList.remove('active-link'));
		this.classList.add('active-link');
	}
}
linkColor.forEach((L) => L.addEventListener('click', colorLink));

/* ================= SCROLL SECTIONS ACTIVE LINK =================== */

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
				links.classList.remove('active-link');
				document
					.querySelector('header nav a[href*=' + id + ']')
					.classList.add('active-link');
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
/* window.addEventListener('scroll', function () {
	var footerIconTop = document.querySelector('.footer-iconTop');
	footerIconTop.classList.toggle('active', window.scrollY > -100);
	footerIconTop.classList.toggle(' ', window.scrollY <= 0);
}); */

/* ======================= SHOW SCROLL TOP ========================= */
function scrollUp() {
	const scrollUp = document.getElementById('scroll-up');

	// Add an event listener for the scroll event
	window.addEventListener('scroll', () => {
		// Check if the scroll position is greater than or equal to 560 viewport height
		if (window.scrollY >= 200) {
			scrollUp.classList.add('show-scroll');
			// Hide the element after 3 seconds (adjust the delay as needed)
			/* setTimeout(() => {
				scrollUp.classList.remove('show-scroll');
			}, 5000);  */ // 5000 milliseconds = 3 seconds
		} else {
			scrollUp.classList.remove('show-scroll');
		}
	});
}

// Call the scrollUp function
scrollUp();

/* function scrollUp() {
	const scrollUp = document.getElementById('scroll-up');
	// When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll
	if (this.scrollY >= 560) {
		scrollUp.classList.add('show-scroll');
		// Hide the element after 3 seconds (adjust the delay as needed)
		setTimeout(() => {
			scrollUp.classList.remove('show-scroll');
		}, 5000); // 5000 milliseconds = 3 seconds
	} else {
		scrollUp.classList.remove('show-scroll');
	}
}

window.addEventListener('scroll', scrollUp); */
/* function scrollUp() {
	const scrollUp = document.getElementById('scroll-up');
	// When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll
	if (this.scrollY >= 560) scrollUp.classList.add('show-scroll');
	else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp); */
