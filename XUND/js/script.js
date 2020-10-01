function testWebP(callback) {

	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {

	if (support == true) {
		document.querySelector('body').classList.add('webp');
	}
	else {
		document.querySelector('body').classList.add('no-webp');
	}
});
$(document).ready(function() {
    $('.header__burger').click(function(event) {
        $('.header__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    })
})
/*
$(document).ready(function () {
    $('.tabs-triggers__item').click(function (e) {
        e.preventDefault();

        var tabsid = $(this).closest('.tabs').attr("id");
        $('#' + tabsid + ' ' + '.tabs-triggers__item').removeClass('tabs-triggers__item--active');
        $('#' + tabsid + ' ' + '.tabs-content__item').removeClass('tabs-content__item--active');

        $(this).addClass('tabs-triggers__item--active');
        $($(this).attr('href')).addClass('tabs-content__item--active');
    });

    $('.tabs-triggers__item:first').click();
});
$(document).ready(function () {
    $('.accordion__title').click(function (event) {

        let accordionid = $(this).closest('.accordion').attr("id");

        if ($('#' + accordionid).hasClass('accordion-one')) {
            $('#' + accordionid + ' ' + '.accordion__title').not($(this)).removeClass('active');
            $('#' + accordionid + ' ' + '.accordion__text').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass('active').next().slideToggle(300);
    });
});
const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll(".lock-padding");

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++) {
        const popupLink = popupLinks[index];
        popupLink.addEventListener("click", function (e) {
            const popupName = popupLink.getAttribute('href').replace('#', '');
            const currentPopup = document.getElementById(popupName);
            popupOpen(currentPopup);
            e.preventDefault();
        });
    }
}
const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
    for (let index = 0; index < popupCloseIcon.length; index++) {
        const el = popupCloseIcon[index];
        el.addEventListener('click', function (e) {
            popupClose(el.closest('.popup'));
            e.preventDefault();
        });
    }
}

function popupOpen(currentPopup) {
    if (currentPopup && unlock) {
        const popupActive = document.querySelector('.popup.open');
        if (popupActive) {
            popupClose(popupActive, false);
        } else {
            bodyLock();
        }
        currentPopup.classList.add('open');
        currentPopup.addEventListener('click', function (e) {
            if (!e.target.closest('.popup__content')) {
                popupClose(e.target.closest('.popup'));
            }
        });
    }
}

function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
        popupActive.classList.remove('open');
        if (doUnlock) {
            bodyUnLock();
        }
    }
}

function bodyLock() {
    const lockPaddingValue = window.innerWidth - document.querySelector('.site-content').offsetWidth + 'px'; //!обратить внимание на контейнер

    if (lockPadding.length > 0) {
        for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.style.paddingRight = lockPaddingValue;
        }
    }
    body.style.paddingRight = lockPaddingValue;
    body.classList.add('lock');

    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
}

function bodyUnLock() {
    setTimeout(function () {
        if (lockPadding.length > 0) {
            for (let index = 0; index < lockPadding.length; index++) {
                const el = lockPadding[index];
                el.style.paddingRight = '0px';
            }
        }
        body.style.paddingRight = '0px';
        body.classList.remove('lock');
    }, timeout);

    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout)
}

document.addEventListener('keydown', function (e) {
    if (e.which === 27) {
        const popupActive = document.querySelector('.popup.open');
        popupClose(popupActive);
    }
});

(function () {
    // проверяем поддержку
    if (!Element.prototype.closest) {

        // реализуем
        Element.prototype.closest = function (css) {
            var node = this;

            while (node) {
                if (node.matches(css)) return node;
                else node = node.parentElement;
            }
            return null;
        };
    }
})();

(function () {
    // проверяем поддержку
    if (!Element.prototype.matches) {

        // определяем свойство
        Element.prototype.matches = Element.prototype.matchesSelector ||
            Element.prototype.webkitMatchesSelector ||
            Element.prototype.mozMatchesSelector ||
            Element.prototype.msMatchesSelector;
    }
})();
$(document).ready(function () {
    let select = function () {
        let selectHeader = document.querySelectorAll('.custom-select');
        let selectItem = document.querySelectorAll('.custom-options__option');

        selectHeader.forEach(item => {
            item.addEventListener('click', selectToggle)
        });

        selectItem.forEach(item => {
            item.addEventListener('click', selectChoose)
        });

        function selectToggle() {
            $('.custom-select').not($(this)).removeClass('open')
            this.classList.toggle('open');
        }

        function selectChoose() {

            let text = this.innerText,
                select = this.closest('.custom-select'),
                currentText = select.querySelector('.custom-select__trigger span');
            currentText.innerText = text;

            let options = this.closest('.custom-options');
            let option = options.querySelectorAll('.custom-options__option');

            for (let index = 0; index < option.length; index++) {
                const element = option[index];
                element.classList.remove('selected');
            }

            this.classList.add("selected");
        }
    };

    select();
})
$(document).ready(function () {
    const navOffset = $('.site_header__bottom').offset().top;
    $(window).scroll(function () {
        const scrolled = $(this).scrollTop();

        if (scrolled > navOffset) {
            $('.site_wrap').addClass('nav-fixed');
        } else if (scrolled < navOffset) {
            $('.site_wrap').removeClass('nav-fixed');
        }
    });
})

$(document).ready(function () {
    mediaQueryMdMin = window.matchMedia('(min-width: 768px)');
    
    // mediaQueryMdMin
    mediaQueryMdMin.addListener(handleTabletChange);
    function handleTabletChange(e) {
        if (e.matches) {

        }

        else {

        }
    }

    if (mediaQueryMdMin.matches) {

    }
});
*/
