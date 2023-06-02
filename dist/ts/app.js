"use strict";
// Change Navbar Styles On Scroll
window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");
    if (nav) {
        const scrollPosition = window.scrollY || window.pageYOffset;
        if (scrollPosition > 0) {
            nav.classList.add("window-scroll");
        }
        else {
            nav.classList.remove("window-scroll");
        }
    }
});
// Show/Hide faq answer
const faqs = document.querySelectorAll(".faq");
faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("open");
        // Change Icon faq
        const iconFaq = faq.querySelector(".faq__icon i");
        if ((iconFaq === null || iconFaq === void 0 ? void 0 : iconFaq.className) === "uil uil-plus") {
            if (iconFaq.classList) {
                iconFaq.classList.remove("uil-plus");
                iconFaq.classList.add("uil-minus");
            }
        }
        else {
            if (iconFaq === null || iconFaq === void 0 ? void 0 : iconFaq.classList) {
                iconFaq.classList.remove("uil-minus");
                iconFaq.classList.add("uil-plus");
            }
        }
    });
});
// Show/Hide Nav Menu
const menu = document.querySelector(".nav__menu");
const openMenuBtn = document.querySelector("#open-menu-btn");
const closeMenuBtn = document.querySelector("#close-menu-btn");
openMenuBtn.addEventListener("click", () => {
    menu.style.display = "flex";
    closeMenuBtn.style.display = "inline-block";
    openMenuBtn.style.display = "none";
});
// Close Nav Menu
const closeNav = () => {
    menu.style.display = "none";
    closeMenuBtn.style.display = "none";
    openMenuBtn.style.display = "inline-block";
};
closeMenuBtn.addEventListener("click", closeNav);
