$(function () {
    $('.nav1').click(function (e) { 
        e.preventDefault();
        $('.nav1').removeClass('active');
        $(this).addClass('active');

    });

    $('.n1').click(function (e) { 
        e.preventDefault();
        $('body').animate({
            scrollTop: $('header').offset().top
        }, 1000)
    });

    $('.n2').click(function (e) { 
        e.preventDefault();
        $('body').animate({
            scrollTop: $('.khoi2').offset().top
        }, 1000)
    });

    $('.n3').click(function (e) { 
        e.preventDefault();
        $('body').animate({
            scrollTop: $('.khoi3').offset().top
        }, 1000)
    });

    $('.n4').click(function (e) { 
        e.preventDefault();
        $('body').animate({
            scrollTop: $('.khoi4').offset().top
        }, 1000)
    });

    $('.n5').click(function (e) { 
        e.preventDefault();
        $('body').animate({
            scrollTop: $('.khoi5').offset().top
        }, 1000)
    });

    $('.n6').click(function (e) { 
        e.preventDefault();
        $('body').animate({
            scrollTop: $('.khoi6').offset().top
        }, 1000)
    });

    // console.log($('.khoi2').offset().top);
    
    // $('body').animate({
    //     scrollTop: 1000
    // }, 1000);

    $('.mauxanh').click(function (e) { 
        e.preventDefault();
        $('body').addClass('xanh');
        $('body').removeClass('vang');
    });

    $('.mauvang').click(function (e) { 
        e.preventDefault();
        $('body').addClass('vang');
        $('body').removeClass('xanh');
    });
    
    $('.maucam').click(function (e) { 
        e.preventDefault();
        $('body').removeClass('xanh');
        $('body').removeClass('vang');
    });

    $(window).scroll(function () { 
        console.log(window.pageYOffset);
        
        if (window.pageYOffset < $('.khoi2').offset().top) {
            $('.nav1').removeClass('active');
            $('.n1').addClass('active');
        }
    
        if (window.pageYOffset >= $('.khoi2').offset().top && window.pageYOffset < $('.khoi3').offset().top) {
            $('.nav1').removeClass('active');
            $('.n2').addClass('active');
        }
    
        if (window.pageYOffset >= $('.khoi3').offset().top && window.pageYOffset < $('.khoi4').offset().top) {
            $('.nav1').removeClass('active');
            $('.n3').addClass('active');
        }
    
        if (window.pageYOffset >= $('.khoi4').offset().top && window.pageYOffset < $('.khoi5').offset().top) {
            $('.nav1').removeClass('active');
            $('.n4').addClass('active');
        }
        
        if (window.pageYOffset >= $('.khoi5').offset().top && window.pageYOffset < $('.khoi6').offset().top) {
            $('.nav1').removeClass('active');
            $('.n5').addClass('active');
        }
    
        if (window.pageYOffset >= $('.khoi6').offset().top) {
            $('.nav1').removeClass('active');
            $('.n6').addClass('active');
        }
        
    });

    console.log($('.khoi2').offset().top);
    console.log($('.khoi3').offset().top);
    console.log($('.khoi4').offset().top);
    console.log($('.khoi5').offset().top);
    console.log($('.khoi6').offset().top);
    
   

    
    

    
    

});