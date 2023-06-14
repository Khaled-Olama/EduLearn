// Change Navbar Styles On Scroll
window.addEventListener("scroll", () => {
	const nav: HTMLElement | null = document.querySelector("nav");
	if (nav) {
		const scrollPosition: number = window.scrollY || window.pageYOffset;
		if (scrollPosition > 10) {
			nav.classList.add("window-scroll");
		} else {
			nav.classList.remove("window-scroll");
		}
	}
});
// Show/Hide faq answer
const faqs: NodeListOf<Element> = document.querySelectorAll(".faq");
faqs.forEach((faq: Element) => {
	faq.addEventListener("click", () => {
		faq.classList.toggle("open");
		// Change Icon faq
		const iconFaq: HTMLElement | null = faq.querySelector(".faq__icon i");
		if (iconFaq?.className === "uil uil-plus") {
			if (iconFaq.classList) {
				iconFaq.classList.remove("uil-plus");
				iconFaq.classList.add("uil-minus");
			}
		} else {
			if (iconFaq?.classList) {
				iconFaq.classList.remove("uil-minus");
				iconFaq.classList.add("uil-plus");
			}
		}
	});
});
// Show/Hide Nav Menu
const menu: HTMLElement = document.querySelector(".nav__menu")!;
const openMenuBtn: HTMLElement = document.querySelector("#open-menu-btn")!;
const closeMenuBtn: HTMLElement = document.querySelector("#close-menu-btn")!;
openMenuBtn.addEventListener("click", () => {
	menu.style.display = "flex";
	closeMenuBtn.style.display = "inline-block";
	openMenuBtn.style.display = "none";
});
// Close Nav Menu
const closeNav = (): void => {
	menu.style.display = "none";
	closeMenuBtn.style.display = "none";
	openMenuBtn.style.display = "inline-block";
};
closeMenuBtn.addEventListener("click", closeNav);
