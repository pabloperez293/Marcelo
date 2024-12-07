const menuBtn = document.getElementById("menu-btn")
const navLinks = document.getElementById("nav-links")
const menuBtnIcon = menuBtn.querySelector("i");

// Click events on and off the page
menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen? "fa-solid fa-xmark": "fa-solid fa-bars")
});
navLinks.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "fa-solid fa-bars");
});

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
}

// Container header
ScrollReveal().reveal(".headerContainer p", {
    ...scrollRevealOption,
});

ScrollReveal().reveal(".headerContainer h1", {
    ...scrollRevealOption,
    delay: 500,
});