$(function(){

    // $('[data-fancybox]').fancybox({
    //     youtube: {
    //         controls: 0,
    //         showinfo: 0
    //     },
    // });

    $('.characters__slider-img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.characters__slider-text',
        prevArrow: '<button class="slick-btn slick-prev"><img src="images/arrow-left.png" alt="prev"></button>',
        nextArrow: '<button class="slick-btn slick-next"><img src="images/arrow-right.png" alt="next"></button>',
        responsive: [
            {
                breakpoint: 769,
                settings: {
                    arrows: false,
                    // dots: true
                }
            },
        ]
    });
    $('.characters__slider-text').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        asNavFor: '.characters__slider-img',
        arrows: false
    });

});