const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = "#555"; // Change background color when scrolled
    } else {
        navbar.style.backgroundColor = "beige"// Restore initial background color
    }
});
