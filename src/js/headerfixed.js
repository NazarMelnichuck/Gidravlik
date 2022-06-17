function checkScroll() {
    const headerFixed = document.querySelector('.header__bottom');
    const headerHide = document.querySelector('.header__top');
    const logo = document.querySelector('.header-bottom__img');
    const navigationText = document.querySelector('.header-bottom__location-text');
    const navigationImg = document.querySelector('.header-bottom__location-img');

    let scrollPos = window.scrollY;

    if (scrollPos > 46) {
        headerFixed.classList.add("fixedToScroll");
        headerHide.classList.add("hideToScroll");
        logo.classList.add("fixedToScroll");
        navigationText.classList.add("fixedToScroll");
        navigationImg.classList.add("fixedToScroll");
    } else {
        headerFixed.classList.remove("fixedToScroll");
        headerHide.classList.remove("hideToScroll");
        logo.classList.remove("fixedToScroll");
        navigationText.classList.remove("fixedToScroll");
        navigationImg.classList.remove("fixedToScroll");
    }
}

window.addEventListener("scroll", function fixedHeader() {
    checkScroll()
});

document.addEventListener("DOMContentLoaded", function () {
    checkScroll()
});