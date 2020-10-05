$(document).ready(function () {


    let $slickElement = $('.beispiel__slider');
    $slickElement.on('init', function (slick) {
        let currentYear = $('.beispiel__slider .slick-current').data('year');
        $('.beispiel__year').text(currentYear);
    });
    $('.beispiel__slider').slick({
        infinite: true,
        nextArrow: '<button type="button" class="slick-next">Nach Jahr filtern: <span class="beispiel__year"><i class="arrow-right"></i></span></button>'
    });
    $slickElement.on('afterChange', function (event, slick, currentSlide, nextSlide) {
        let currentYear = $('.beispiel__slider .slick-current').data('year');
        $('.beispiel__year').text(currentYear);
    });
})