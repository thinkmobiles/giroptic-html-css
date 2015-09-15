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
            1920:{items:5}
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
$('.bxslider').bxSlider({
    auto: true,
    autoControls: true
});
});
$('#app .row').click(function(){
    $(".phone-style").addClass('down');
    $(".down").addClass('animate');
    //$('.animate').(8000, function(){
    //    $('.animate').addClass('circle');
    //});
    setTimeout(function(){
        $('.animate').addClass('circle');
        $('.circle').animate({
            scale:'1'
        }, 300);
    }, 3000);
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

// --- Search Section
$('#search-btn').bind('click', function(){
    $('#search-block').animate({
        opacity: '1',
        zIndex: '1000'
    }, 10);
});
$('#inBox-toggle').bind('click', function(){
    if ($('#inBox').hasClass('in')) {
        $('#inBox').removeClass('in');
    } else {
        $('#inBox').addClass('in');
    }
});