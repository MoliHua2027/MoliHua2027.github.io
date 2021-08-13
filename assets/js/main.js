function showMenu(toggle, menu) {
    const toggleMenu = document.getElementById(toggle);
    const sideMenu = document.getElementById(menu);

    if(toggleMenu && sideMenu) {
        toggleMenu.addEventListener("click", function(){
            sideMenu.classList.toggle('active-menu');
    })
}
}
showMenu("header-toggle", "header-menu");


const swiper = new Swiper(".mainscreen_container", {
    loop: true,
    effect: "coverflow",
    keyboard: {
        enable: true,
    },
    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
    },
    speed: 1500,
    grabCursor: true,
    navigation: {
        prevEl: ".arrow-left",
        nextEl: ".arrow-right"
    },
})
