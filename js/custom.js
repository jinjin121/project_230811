$(function () {
    $('.slide01').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        pauseOnHover: false,
        pauseOnFocus: false,
    });
    $('.slide01_slick_btn .play_btn a img').click(function () {
        $('.slide01').slick('slickPlay');
    });
    $('.slide01_slick_btn .stop_btn a img').click(function () {
        $('.slide01').slick('slickPause');
    });


});