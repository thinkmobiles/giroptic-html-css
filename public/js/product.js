$(document).ready(function(){
    $('ul.tabs li').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#"+tab_id).addClass('current');
    });
    $('.recommended-box').hover(function() {
        $('.recommended-box').addClass('hover');
        $(this).removeClass('hover');
    }, function() {
        $('.recommended-box').removeClass('hover');
    });
});