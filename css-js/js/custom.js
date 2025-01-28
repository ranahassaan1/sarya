$('.portfolio-slider').slick({
    rows: 2,
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    autoplay: false,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1191,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 425,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }

    ]
});


$('.expert-slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    speed: 300,
    autoplay: false,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1191,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 425,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }

    ]
});


$('.testimonial-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    //  autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
});