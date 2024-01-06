// script.js

document.addEventListener("DOMContentLoaded", function() {
    const menu = document.querySelector(".menu");
    const menuBtn = document.querySelector(".menu-btn");

    menuBtn.addEventListener("click", () => {
        menu.classList.toggle('nav-toggle');
        console.log("Menu button clicked!");
    });
});
