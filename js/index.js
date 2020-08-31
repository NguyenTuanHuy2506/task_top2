var _secSlick = 0;
$(window).on('load resize scroll',
    function() {
        var _scroll = $(window).scrollTop();
        var _toTopButton = $('.to-top-button');
        var _wh = $(window).height();
        var _ww = $(window).width();

        if (_ww >= 1025 && _secSlick === 0) {
            _businessSecondSlick();
            _secSlick = -1;
        }
        if(_ww <= 1024){
            _secSlick = 0;
        }
        let _header = $('.header');
        _scroll > 0 ? _header.addClass('active') : _header.removeClass('active');
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
            if (_scroll + _wh > _position) {
                $(this).addClass('animated');
            }
        });
    });

function _mvSlick() {
    $('.mv__inner').slick({
        arrows: false,
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });
}
_mvSlick();

function _businessPrimarySlick() {
    $('.business__pri-slick').slick({
        arrows: true,
        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><span></span></button>',
        nextArrow: '<button class="slick-next" aria-label="Next" type="button"><span></span></button>',
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        asNavFor: '.business__sec-slick',
    });
}
_businessPrimarySlick();

function _businessSecondSlick() {
    $('.business__sec-slick').slick({
        arrows: false,
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        asNavFor: '.business__pri-slick',
        responsive: [{
            breakpoint: 1024,
            settings: "unslick"
        }]
    });
}
// _businessSecondSlick();

function _peopleSlick() {
    $('.people__inner').slick({
        arrows: true,
        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><span></span><span></span></button>',
        nextArrow: '<button class="slick-next" aria-label="Next" type="button"><span></span><span></span></button>',
        dots: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
            }
        }, {
            breakpoint: 769,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
            }
        }, {
            breakpoint: 757,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
            }
        }]
    });
}
_peopleSlick();

//----------hambuger button-------//
var _menuOpen = 0;
$('.hambuger-button').click(function() {
    let _cssIn = 'bounceInLeft2';
    let _cssOut = 'bounceOutLeft2';
    let _this = $(this);
    let _header = $('.header');
    var _menu = $('.header__inner');
    if (_menuOpen == 0) {
        if (!_this.hasClass('active')) {
            _menu.addClass('active').addClass(_cssIn);
            _this.addClass('active');
            _header.addClass('active');
            delayF(function() {
                _menuOpen = 1;
                _menu.removeClass(_cssIn)
            }, 800)();
        } else {
            return false;
        }
    } else {
        if (_this.hasClass('active')) {

            _menu.addClass(_cssOut);
            delayF(function() {
                _this.removeClass('active');
                _menu.removeClass('active').removeClass(_cssOut);
                _header.removeClass('active');
                _menuOpen = 0;
            }, 800)();
        } else {
            return false;
        }
    }
});


$('.to-top-button').click(function(event) {
    /* Act on the event */
    $('html, body').animate({
        scrollTop: 0 //$($.attr(this, 'href')).offset().top
    }, 'slow', 'linear');
    return false;
});
//----------delay function-------//
function delayF(func, timed) {
    let timeout;
    return function() {
        let _f = func;
        clearTimeout(timeout);
        timeout = setTimeout(_f, timed);
    };
}