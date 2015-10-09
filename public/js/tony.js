/**
 * Created by TONY on 15.09.2015.
 */

//Home Section

// --- Search Section
$('#search-btn').on('click', function(){

    $('#search-block').animate({
        opacity: '1',
        zIndex: '1000'
    }, 10);
});

$('#search-block').on('click', function(){
    $('#search-block').animate({
        opacity: '0',
        zIndex: '-1'
    }, 10);
});

// --- open Mobile menu
$('#forMobile').on('click', function() {
    $('#menuPopUp').addClass('activePop');
    $('#menuPopUp').show();
});

// --- close Mobile menu
$('#menuPopUp').on('click', function() {
    if($(document).width() <= '768') {
        $('#menuPopUp').hide();
        $('#menuPopUp').removeClass('activePop');
    }
});


// Founction Section
$(window).on('load', function() {


    var showPlayer = function() {
      var player = $('#circleCircle');
      var playerText = $('.first-page-desc');
      var playerScroll = $('.home-first-page-bg .scroll');
      player.addClass('show-cam');
      playerText.addClass('first-page-desc-show');
      playerScroll.addClass('first-page-desc-show');
    };

    showPlayer();

    $("#header").sticky({
        topSpacing:0,
        responsiveWidth: true
    });


});

//--Scrolling Events
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
        secondWave.animate({opacity: 1}, 200, function () {
            thirdWave.animate({opacity: 1}, 200, function () {
                fourthWave.animate({opacity: 1}, 200, function () {
                });

                $('.tabs').css('padding-top', 0);
            });
        });
    });
};

function appPhoneAnimate(){
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
};

function speTechAnimate(){
    $('.speTech .icons').addClass('iconsClick');
    setTimeout(function(){
        $('.speTech .description').animate({
            top: "0",
            opacity: "1"
        }, 200);
    }, 800);
};

var scrolling = function(){
    if($(document).width() >= 750) {
        var topScroll = $(window).scrollTop() + $('header').height();

        if($(window).scrollTop() >= $('#player').offset().top){
            videoAnimate();
        }
        if(topScroll >= $("#app").offset().top){
            appPhoneAnimate();
        }
        if(topScroll >= $("#speTech").offset().top){
            speTechAnimate();
        }
    }

};

$(window).on('scroll', scrolling);

//$('#play').on('click', videoAnimate);