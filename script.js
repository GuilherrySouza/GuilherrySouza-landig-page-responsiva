document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const navMenu = document.querySelector(".menu");

    if (menuIcon && navMenu) {
        menuIcon.addEventListener("click", function () {
            navMenu.classList.toggle("show"); // Mostra/esconde o menu no mobile
        });
    }
});
