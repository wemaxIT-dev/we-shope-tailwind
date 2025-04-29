var swiper = new Swiper(".mySwiper-img", {
    slidesPerView: 5,
    spaceBetween: 25,
    // slidesPerGroup: 3,
    freeMode: true,
    // fede: true,
    centerSlide: true,
    grabCursor: true,
    loop: true,
    loopFillGroupWithBlank: true,
    // pagination
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

   
    breakpoints: {
        0: {
            slidesPerView: 2,
        },
        560: {
            slidesPerView: 3,
        },
        760: {
            slidesPerView: 5,
        },
        970: {
            slidesPerView: 6,
        },
        1370: {
            slidesPerView: 6,
        },
    },
});


