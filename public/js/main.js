// --- App Carousel Section
$(document).ready(function() {
    $("#appSlider .owl-carousel").owlCarousel({
        items: 5,
        loop: true,
        center: true,
        margin: 10,
        nav: true,
        responsiveClass:true,
        responsive:{
            0:{items:1},
            768:{items:1},
            769:{items:3, autoWidth: true},
            992:{items:3, autoWidth: true},
            1024:{items:3, autoWidth: true},
            1280:{items:5, autoWidth: true},
            1980:{items:5}
        }
    });
    $("#paveOs .counters > .row").owlCarousel({
        items: 3,
        dots:true,
        responsiveClass:true,
        responsive:{
            0:{items:1},
            750:{items:1},
            768:{items:3, dots:false},
            1024:{items:3, dots:false},
            1680:{items:3, dots:false}
        }
    });
    //$(".properties-mobile > .row").owlCarousel({
    //    items: 4,
    //    loop: true,
    //    center: true,
    //    dots:true,
    //    responsiveClass:true,
    //    responsive:{
    //        0:{items:3},
    //        750:{items:3},
    //    }
    //});
    $("#pave2 .counters > .row").owlCarousel({
        items: 3,
        dots:true,
        responsiveClass:true,
        responsive:{
            0:{items:1},
            750:{items:1},
            768:{items:1},
            1024:{items:3, dots:false},
            1680:{items:3, dots:false}
        }
    });
    $('#camera .visual-camera > .slider').owlCarousel({
        items:1,
        nav: true,
        loop: true,
        animateOut: 'bounceOutUp',
        animateIn: 'bounceInUp',
        mouseDrag: false,
        responsiveClass:true,
        responsive:{
            0:{items:1},
            768:{items:1},
            769:{items:1},
            992:{items:1},
            1024:{items:1},
            1280:{items:1},
            1980:{items:1}
        },
        smartSpeed:1200
    });
    $("#accessories .accessories-carousel .owl-carousel").owlCarousel({
        items: 1,
        loop: true
    });
});

// --- Accessories block
$('ul.tabs li').click(function(){
    var tab_id = $(this).attr('data-tab');

    $('ul.tabs li').removeClass('current');
    $('.tab-content').removeClass('current');

    $(this).addClass('current');
    $("#"+tab_id).addClass('current');
});
//$('.bxslider').bxSlider({
//    auto: true,
//    autoControls: true
//});


// --- Application Section
$('#app .row').click(function(){
    $(".phone-style").addClass('down');
    setTimeout(function(){
        $('.animate').animate(3000, function(){
            $('.animate').addClass('scale');
        });
    }, 3000);
    setTimeout(function(){
        $('.circle').animate(3000, function(){
            $('.circle').addClass('scale');
        });
    }, 3000);
});

// --- Patchwork Section
$('#patchwork').click(function(){
    setTimeout(function(){
        $('img').animate(3000, function(){
            $('img').addClass('scale');
        });
    }, 1000);
});

// --- 3D Effect
$(window).on('mousemove', function(e) {
    var w = $(window).width();
    var h = $(window).height();
    var offsetX = 0.5 - e.pageX / w;
    var offsetY = 0.5 - e.pageY / h;

    $(".parallax").each(function(i, el) {
        var offset = parseInt($(el).data('offset'));
        var translate = "translate3d(" + Math.round(offsetX * offset) + "px," + Math.round(offsetY * offset) + "px, 0px)";

        $(el).css({
            '-webkit-transform': translate,
            'transform': translate,
            'moz-transform': translate
        });
    });
});

// --- Send App Section
$('#sendAppBtn').click(function(){
    $('#sendAppBtn').addClass('hidden');
    $('#sendForm').removeClass('hidden');
    $('#sendApp').addClass('scale');
    $('#sendForm .btn-send').animate({
        right: "0%",
        marginRight: "0"
    }, 800, function(){
        $('#sendForm .input-sm').animate({
            opacity: "1"
        }, 200, function(){
            $('#sendForm .input-sm').addClass('placeholder');
        });
    });
});

// --- Spec Tech Section
$('#speTech').click(function(){
    $('.speTech .icons').addClass('iconsClick');
    setTimeout(function(){
        $('.speTech .description').animate({
            top: "0",
            opacity: "1"
        }, 200);
    }, 800);
});
// --- Parallax effect
myParaxify = paraxify('.paraxify');

// --- Camera section
$('#inBoxToggle').click(function(){
    if ($('#inBox-collapse').hasClass('in')) {
        $('#inBox-collapse').animate({
            left: '-100%'
        }, 800);
        $('#inBox-collapse').removeClass('in');
        $('.inBox-cnt .feature').css('top', '10%');
        $('.inBox-cnt .feature').css('opacity', '0');
        setTimeout(function(){
            $('#inBoxToggle .icon-bar').removeClass('hidden');
            $('#inBoxToggle .glyphicon-remove').addClass('hidden');
        }, 800);
    } else {
        $('#inBox-collapse').addClass('in');
        $('#inBox-collapse').animate({
            left: '0'
        }, 850, function(){
            $('.inBox-cnt .feature').animate({
                top: '0',
                opacity: '1'
            }, 200);
        });
        setTimeout(function(){
            $('#inBoxToggle .icon-bar').addClass('hidden');
            $('#inBoxToggle .glyphicon-remove').removeClass('hidden');
        }, 850);
    }
});
$('#inBoxClose').click(function(){
    $('#inBox-collapse').animate({
        left: '-100%'
    }, 800);
    $('#inBox-collapse').removeClass('in');
    $('.inBox-cnt .feature').css('top', '10%');
    $('.inBox-cnt .feature').css('opacity', '0');
});
$(function() {
    $('.item a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});