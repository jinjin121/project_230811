$(function () {
    $('.slide01').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000,
        pauseOnHover: false,
        pauseOnFocus: false,
    });
    $('.slide01_slick_btn .play_btn').click(function () {
        $('.slide01').slick('slickPlay');
    });
    $('.slide01_slick_btn .stop_btn').click(function () {
        $('.slide01').slick('slickPause');
    });
    $('.slide02').slick({
        arrows: false,
        autoplay: true,
        fade: true,
        autoplaySpeed: 3000,
        speed: 1000,
        pauseOnHover: false,
        pauseOnFocus: false,
    });
    $('.slide03').slick({
        arrows: false,
        autoplay: true,
        fade: true,
        autoplaySpeed: 3000,
        speed: 1000,
        pauseOnHover: false,
        pauseOnFocus: false,
    });
    $('.fs_tit_box').on('click', function (e) {
        e.preventDefault();
        $('.fs_list').toggleClass('on');
    });

});