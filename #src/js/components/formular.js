$(document).ready(function () {
    $('#formularStepOne').on("click", function(e) {
        e.preventDefault();
        $('.formular__step-one').slideUp(300);
        $('.formular__step-two').slideDown(300);
        $('html, body').animate({scrollTop: 0},500);
    });
    $('#formularStepTwo').on("click", function(e) {
        e.preventDefault();
        $('.formular__step-two').slideUp(300);
        $('.formular__step-one').slideDown(300);
        $('html, body').animate({scrollTop: 0},500);
    });
});