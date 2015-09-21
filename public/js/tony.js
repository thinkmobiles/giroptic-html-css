/**
 * Created by TONY on 15.09.2015.
 */
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
    ochko();
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

var ochko = function(){
  //var section =  $('.home-first-page');
  //var widthEl = $('.home-first-page').width();
  //var heightEl = $('.home-first-page').height();
  //var halfWidth = widthEl/2;
  //var halfHeight = heightEl/2;
  //  var topPos =
  //
  //  section.css({
  //      position: 'absolute',
  //      width: widthEl,
  //      height: heightEl,
  //      top: heightEl - halfHeight,
  //      left: widthEl - halfWidth,
  //      borderTopLeftRadius: 50,
  //      borderTopRightRadius: 50,
  //      borderBottomLeftRadius: 50,
  //      borderBottomRightRadius: 50
  //  });
};

$(window).on('scroll', scrolling);

$('#play').on('click', videoAnimate);