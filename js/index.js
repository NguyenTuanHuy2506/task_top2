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