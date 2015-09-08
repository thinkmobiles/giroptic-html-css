$(document).ready(function() {
    $(".owl-carousel").owlCarousel({
        //items : 5,
        loop: true,
        center: true,
        margin: 10,
        nav: true,
        responsive:{
            0:{items:1},
            768:{items:1},
            1025:{items:3},
            1281:{items:5}
        }
    });
});
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