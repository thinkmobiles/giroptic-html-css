// --- App Carousel Section
$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
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
// --- How to use Section
$('#moveDev').mouseup(function(){
    setTimeout(function(){
        $('.rightHand').animate(3000, function(){
            $('.rightHand').addClass('move');
        });
    }, 1000);
    setTimeout(function(){
        $('.circle').animate(3000, function(){
            $('.circle').addClass('move');
        });
    }, 1500);
    setTimeout(function(){
        $('.oculus').animate(3000, function(){
            $('.oculus').addClass('move');
        });
    }, 2500);
    setTimeout(function(){
        $('#moveDev').animate(3000, function(){
            $('.howToUse-left-block').hide();
            $('.howToUse-right-block').hide();
            $('.moveDev').addClass('blackBgr');
        });
    }, 4000);
});

// --- Send App Section
$('#sendAppBtn').click(function(){
    $('#sendAppBtn').addClass('hidden');
    $('#sendForm').removeClass('hidden');
    $('#sendApp').addClass('scale');
    $('#sendForm .btn-send').animate({
        right: "0%",
        marginRight: "0"
    }, 3000, function(){
        $('#sendForm .input-sm').animate({
            opacity: "1"
        }, 800, function(){
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
$(window).stellar();

// --- Camera section
$('#inBoxToggle').click(function(){
    if ($('#inBox-collapse').hasClass('in')) {
        $('#inBox-collapse').animate({
            left: '-100%'
        }, 800);
        $('#inBox-collapse').removeClass('in');
        $('.inBox-cnt .feature').css('top', '10%');
        $('.inBox-cnt .feature').css('opacity', '0');
    } else {
        $('#inBox-collapse').addClass('in');
        $('#inBox-collapse').animate({
            left: '0'
        }, 800, function(){
            $('.inBox-cnt .feature').animate({
                top: '0',
                opacity: '1'
            }, 200);
        });
    }
});


// --- Search Section
$('#search-btn').bind('click', function(){
    $('#search-block').animate({
        opacity: '1',
        zIndex: '1000'
    }, 10);
});