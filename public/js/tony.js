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

// Select
$('.slct').click(function(){

    var dropBlock = $(this).parent().find('.drop');

    if( dropBlock.is(':hidden') ) {
        dropBlock.slideDown();


        $(this).addClass('active');


        $('.drop').find('li').click(function(){


            var selectResult = $(this).html();


            $(this).parent().parent().find('input').val(selectResult);


            $(this).parent().parent().find('.slct').removeClass('active').html(selectResult);


            dropBlock.slideUp();
        });


    } else {
        $(this).removeClass('active');
        dropBlock.slideUp();
    }


    return false;
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

//--Function Section
var countImg = 0;
var fuctionGiroptic = function(e) {
    var elem = $(e.target);

    var images = $('.giropticFirst .image img');
    $('giropticFirst').focus();

    if(countImg == 0) {
        images.eq(countImg).hide();
        countImg++;
        images.eq(countImg).fadeIn();
    } else if(countImg == 1){
        images.eq(countImg).hide();
        countImg++;
        images.eq(countImg).fadeIn();
        $('.scrolling img').fadeIn(600, function() {
            $('.scrolling .nav')
                .addClass('activate')
                .fadeIn();

            $('.scrolling .nav .left .line').addClass('lineActive');
            $('.scrolling .nav .right .line').addClass('lineActive');

            elem.unbind("wheel");
            elem.unbind("onwheel");
            elem.unbind("onmousewheel");
            elem.unbind("mousewheel");
            elem.unbind("MozMousePixelScroll");

            document.onmousewheel=document.onwheel=function(){
                return true;
            };
            document.addEventListener("MozMousePixelScroll",function(){return true},true);
            document.onkeydown=function(e) {
                if (e.keyCode>=33&&e.keyCode<=40) return true;
            }
        });
    }
};


$('.giropticFirst').on('click', fuctionGiroptic);

//--Scrolling Events
function videoAnimate() {
    var play = $('#play');
    var playImg = $('.playerImg');
    var firstWave = $('#firstWave');
    var secondWave = $('#secondWave');
    var thirdWave = $('#thirdWave');
    var fourthWave = $('#fourthWave');


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

var scrolling = function(e){
    if($(document).width() >= 750) {
        var topScroll = $(window).scrollTop() + $('header').height();

        if($(window).scrollTop() >= $('#player').offset().top){
            videoAnimate();
        }
        if($(window).scrollTop() >= $('#function').offset().top && $(window).scrollTop() < $('#function').offset().top + 120){
            var elem = $(e.target);

            elem.bind("wheel", fuctionGiroptic);
            elem.bind("onwheel", fuctionGiroptic);
            elem.bind("onmousewheel", fuctionGiroptic);
            elem.bind("mousewheel", fuctionGiroptic);
            elem.bind("MozMousePixelScroll", fuctionGiroptic);
            document.onmousewheel=document.onwheel=function(){
                return false;
            };
            document.addEventListener("MozMousePixelScroll",function(){return false},false);
            document.onkeydown=function(e) {
                if (e.keyCode>=33&&e.keyCode<=40) return false;
            }
        }
        if(topScroll >= $("#app").offset().top){
            appPhoneAnimate();
        }
        if(topScroll >= $("#speTech").offset().top){
            speTechAnimate();
        }
    }

};

$(document).on('scroll', scrolling);
