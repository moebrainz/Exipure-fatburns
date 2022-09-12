$(document).ready(function() {
    var showPopup = true;

    function hidePopup() {
        $(".main-custom-popup--wrapper").fadeOut("500");
    }

    function displayPopup() {
        $('.main-custom-popup--wrapper').delay(50).css({
            opacity: 0,
            display: 'flex'
        }).animate({
            opacity: 1
        }, 500);
        $(".main-custom-popup--wrapper").delay(250).fadeIn(10);
        $(".main-custom-popup").delay(250).animate({
            top: "-=1%",
        }, 250);
        $(".main-custom-popup").animate({
            top: "+=2%",
        }, 250);
        $(".main-custom-popup").animate({
            top: "-=1%",
        }, 350);
    }
    $(document).bind("mouseleave", function(e) {
        if (e.pageY - $(window).scrollTop() <= 1) {
            if (showPopup) {
                displayPopup();
                showPopup = false;
            }
        }
    });
    $(".main-custom-popup--close-btn").click(function() {
        hidePopup();
    });
    $(".custom-close-popup").click(function() {
        hidePopup();
    });
    $(window).click(function(event) {
        if (event.target.className == "main-custom-popup--wrapper" || event.target.className == "main-custom-popup") {
            hidePopup()
            console.log()
        }
    });
    jQuery(document).on('touchstart', function() {
        $(body).addClass('on-mobile-device');
    });

    function myScrollSpeedFunction() {
        if (window.matchMedia("(max-width: 720px)").matches) {
            if (my_scroll() < -100) {
                if (showPopup) {
                    displayPopup()
                    showPopup = false;
                }
            }
        }
    }
    var my_scroll = (function() {
        var last_position, new_position, timer, delta, delay = 50;

        function clear() {
            last_position = null;
            delta = 0;
        }
        clear();
        return function() {
            new_position = window.scrollY;
            if (last_position != null) {
                delta = new_position - last_position;
            }
            last_position = new_position;
            clearTimeout(timer);
            timer = setTimeout(clear, delay);
            return delta;
        };
    })();
    jQuery(document).on('scroll', myScrollSpeedFunction);
});