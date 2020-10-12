$(document).ready(function () {
    let formularStepOne = $('#formularStepOne');

    $('#formularStepOne').on("click", function (e) {
        e.preventDefault();
        $('.formular__step-one').slideUp(300);
        $('.formular__step-two').slideDown(300);
        $('html, body').animate({ scrollTop: 0 }, 500);
    });
    $('#formularStepTwo').on("click", function (e) {
        e.preventDefault();
        $('.formular__step-two').slideUp(300);
        $('.formular__step-one').slideDown(300);
        $('html, body').animate({ scrollTop: 0 }, 500);
    });

    let input = $('#formularAccordion .input-wrapper__input');
    input.on("change", function () {
        $(this).toggleClass('active');

        for (let i = 0; i < input.length; i++) {
            const element = input[i];
            
            if (element.classList.contains('active')) {
                formularStepOne.prop('disabled', false);
                return;
            }
            else {
                formularStepOne.prop('disabled', true);
            }
        }
    });
});