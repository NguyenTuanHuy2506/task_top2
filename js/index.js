$(window).on('load resize scroll',
    function() {
        var _scroll = $(window).scrollTop();
        var _toTopButton = $('.to-top-button');
        var _wh = $(window).height();
        //--------to top button

        if (_scroll > 400) {
            if (!_toTopButton.hasClass('active')) {
                _toTopButton.addClass('active');
            }
        } else {
            _toTopButton.removeClass('active');
        }

        //--passing bar
        $(".passing").each(function() {
            var _position = $(this).offset().top;
            if (_scroll + _wh > _position + _wh / 4) {
                $(this).addClass('animated');
            } else {
                console.log(_scroll, _wh, _position, _wh / 4);
            }
        });
    });

$('.mv__inner').slick({
    arrows: false,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
});
$('.business__pri-slick').slick({
    arrows: true,
    prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><span></span></button>',
    nextArrow: '<button class="slick-next" aria-label="Next" type="button"><span></span></button>',
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    asNavFor: '.business__sec-slick'
});
$('.business__sec-slick').slick({
    arrows: false,
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    asNavFor: '.business__pri-slick'
});

$('.people__inner').slick({
    arrows: true,
    prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><span></span></button>',
    nextArrow: '<button class="slick-next" aria-label="Next" type="button"><span></span></button>',
    dots: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
});