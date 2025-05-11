document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.querySelector(".menu");
    const navLinks = document.querySelector("nav ul");

    menuButton.addEventListener("click", function() {
        navLinks.style.display = navLinks.style.display === "block" ? "none" : "block";
    });
});
