function toggleMobileNav() {
    const buttonAction = document.querySelector(".menu");
    const navMain = document.querySelector("header");

    if (buttonAction) {
        buttonAction.addEventListener("click", function () {
        navMain.classList.toggle("menu-open");
        });
    }
}

window.addEventListener("DOMContentLoaded", function () {
    toggleMobileNav();
});