/**
 * Created by TONY on 15.09.2015.
 */
$(document).ready(function() {

});

function videoAnimate() {
    var play = $('#play');
    var playImg = $('.playerImg');
    var firstWave = $('#firstWave');
    var secondWave = $('#secondWave');
    var thirdWave = $('#thirdWave');
    var fourthWave = $('#fourthWave');
    var height = $(window).height();

    play.show();
    playImg.addClass('playerAnim');
    firstWave.animate({opacity: 1}, 200, function () {
        //firstWave.animate({opacity: 0}, 200);
        secondWave.animate({opacity: 1}, 200, function () {
            //secondWave.animate({opacity: 0}, 200);
            thirdWave.animate({opacity: 1}, 200, function () {
               // thirdWave.animate({opacity: 0}, 200);
                fourthWave.animate({opacity: 1}, 200, function () {
                    //fourthWave.animate({opacity: 0}, 200);
                });

                $('.tabs').css('padding-top', 0);
            });
        });
    });
};

var scrolling = function(){
    if($(window).scrollTop() > 837){
        console.log('max');
        videoAnimate();
    } else {
        console.log('min')
    }
};

$(window).on('scroll', scrolling);

$('#play').on('click', videoAnimate);