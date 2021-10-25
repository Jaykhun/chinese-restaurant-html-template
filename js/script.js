$('.slider').slick({
    infinite: true,
    autoplaySpeed: 2000,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    arrows: true,
    nextArrow: '.prev-icon',
    prevArrow: '.next-icon',
    dots: true,
});

$('.main__sets-slider').slick({
    infinite: true,
    autoplaySpeed: 2000,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: true,
    arrows: true,
    nextArrow: '.sets-left',
    prevArrow: '.sets-right',
    dots: true,
    responsive: [{
        breakpoint: 1100,
        settings: {
            slidesToShow: 3
        }
    },
    {
        breakpoint: 850,
        settings: {
            slidesToShow: 2
        }
    },
    {
        breakpoint: 482,
        settings: {
            slidesToShow: 1,
        }
    },
    {
        breakpoint: 430,
        settings: {
            slidesToShow: 1,
        }
    }
    ]
});

$('.main__rolls-slider').slick({
    infinite: true,
    autoplaySpeed: 2000,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: true,
    arrows: true,
    nextArrow: '.rolls-icon-right',
    prevArrow: '.rolls-icon-left',
    dots: true,
    responsive: [{
        breakpoint: 1100,
        settings: {
            slidesToShow: 3
        }
    },
    {
        breakpoint: 850,
        settings: {
            slidesToShow: 2
        }
    },
    {
        breakpoint: 482,
        settings: {
            slidesToShow: 1,
        }
    },
    {
        breakpoint: 430,
        settings: {
            slidesToShow: 1,
        }
    }
    ]
});

$('.main__pizza-slider').slick({
    infinite: true,
    autoplaySpeed: 2000,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: true,
    arrows: true,
    nextArrow: '.pizza-icon-right',
    prevArrow: '.pizza-icon-left',
    dots: true,
    responsive: [{
        breakpoint: 1100,
        settings: {
            slidesToShow: 3
        }
    },
    {
        breakpoint: 850,
        settings: {
            slidesToShow: 2
        }
    },
    {
        breakpoint: 482,
        settings: {
            slidesToShow: 1,
        }
    },
    {
        breakpoint: 430,
        settings: {
            slidesToShow: 1,
        }
    }
    ]
});


$('.main__wok-slider').slick({
    infinite: true,
    autoplaySpeed: 2000,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: true,
    arrows: true,
    nextArrow: '.wok-icon-right',
    prevArrow: '.wok-icon-left',
    dots: true,
    responsive: [{
        breakpoint: 1100,
        settings: {
            slidesToShow: 3
        }
    },
    {
        breakpoint: 850,
        settings: {
            slidesToShow: 2
        }
    },
    {
        breakpoint: 482,
        settings: {
            slidesToShow: 1,
        }
    },
    {
        breakpoint: 430,
        settings: {
            slidesToShow: 1,
        }
    }
    ]
});


$('.main__new-slider').slick({
    infinite: true,
    autoplaySpeed: 2000,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    pauseOnHover: true,
    arrows: true,
    nextArrow: '.new-icon-right',
    prevArrow: '.new-icon-left',
    dots: true,
    responsive: [{
        breakpoint: 1100,
        settings: {
            slidesToShow: 3
        }
    },
    {
        breakpoint: 850,
        settings: {
            slidesToShow: 2
        }
    },
    {
        breakpoint: 482,
        settings: {
            slidesToShow: 1,
            arrows: false,
            dots: false,
        }
    },
    {
        breakpoint: 430,
        settings: {
            slidesToShow: 1,
            centerMode: false,
            arrows: false,
            dots: false,
        }
    }
    ]
});

