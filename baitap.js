$(function () {
    $('.nav1').click(function (e) { 
        e.preventDefault();
        $('.nav1').removeClass('active');
        $(this).addClass('active');
        $('nav').addClass('bg-nav');
        $('.logo').addClass('color-logo');
    });

    $('.n1').click(function (e) { 
        e.preventDefault();
        $('html').animate({
            scrollTop: $('.khoi1').offset().top-72
        }, 1000)
        $('.n1').removeClass('color-logo');
        $('.n2').addClass('color-logo');
        $('.n3').addClass('color-logo');
    });

    $('.n2').click(function (e) { 
        e.preventDefault();
        $('html').animate({
            scrollTop: $('.khoi2').offset().top-72
        }, 1000)
        $('.n2').removeClass('color-logo');
        $('.n1').addClass('color-logo');
        $('.n3').addClass('color-logo');
    });

    $('.n3').click(function (e) { 
        e.preventDefault();
        $('html').animate({
            scrollTop: $('.khoi3').offset().top-72
        }, 1000)
        $('.n3').removeClass('color-logo');
        $('.n2').addClass('color-logo');
    });
    
    $('.logo').click(function (e) { 
        e.preventDefault();
        $('nav').removeClass('bg-nav');
        $('.logo').removeClass('color-logo');
        $('html').animate({
            scrollTop: $('header').offset().top
        }, 1000)
        $('.nav1').removeClass('action');
    });
});