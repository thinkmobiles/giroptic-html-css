var isScrolling;
var slideArray = [];

var callbacks = {
    'video': videoAnimate
};

$(document).ready(function () {
    var scrollTop = $(document).scrollTop();
    var height = $(window).height();

    changeHeader(scrollTop, height, 1);

    //Home Header Active
    $('#home-header .login').click(function () {

    });
    $("#functionality1 .slider-control .arrow").click(function(){
        $("#functionality1 .content .property div").eq(0).animate({marginTop:"-10px"},1000,function(){

            $("#functionality1 .content .property div").eq(1).animate({marginTop:"-10px"},1000,function(){


            });
        });

    });
    //End Home Header Active

    //Fixed Header Action
    $('#header-fixed li').click(function (e) {
        var target = $(e.target).parent('li')[0];
        var toElement = $('#' + target.className)[0].offsetTop;
        var scrollTop = $(document).scrollTop();
        var direction = (toElement > scrollTop) ? 1 : 0;
        var height = $(window).height();

        isScrolling = true;

        changeHeader(scrollTop, height, direction);
        $('body').stop().animate({
            scrollTop: toElement
        }, 1500, "linear", function () {
            isScrolling = false;
            callbacks[target.className]();
        });
    });
    //End Fixed Header Action

    //Slider Controler
    $('.slider-control a:not(.arrow)').click(function (e) {
        var target = $(e.target);
        var parent = $(e.target).parent().find('.active').removeClass('active');

        target.addClass('active');
    });

    $('.slider-control .arrow').click(function (e) {
        var target = $(e.target);
        var parent = '#' + target.parents('section').attr('id');
        var active = $(e.target).parent().find('.active');
        var index = $(parent + ' .slider-control a').index(active);
        var next = index;
        var nextEl = $(parent + ' .slider-control a').eq(index + 1);
        var last = $(parent + ' .slider-control a').length - 2;

        if (next !== last) {
            active.removeClass('active');
            nextEl.addClass('active');
        } else {

        }
    });
    //End Slider Controler


    //Change Cam Color
    $('#cam360 .colors span').click(function (e) {
        var target = e.target;
        var currentClass = target.className.replace('active', '');

        $('#cam360 .colors').find('.active').removeClass('active');
        $(target).addClass('active');
        $('#cam360').attr('class', currentClass + ' slide-section');
    });
    //End Change Cam Color

    //Functionality
    $('#functionality1').bind('mousewheel', scrollFunctionality);
    //End Functionality
    //App
    $('#app1').bind('mousewheel', scrollApp);
    //End App

    $(window).bind('mousewheel', ScrollPage);

    $(window).scroll(function(e){
        parallax();
    });
});

function parallax(){
    var scrolled = $(window).scrollTop();
    $('#main').css('top', -(scrolled * 0.2) + 'px');
}

function changeHeader(top, height, direction) {
    var header = $('#header-fixed');

    if (top >= (height - 60) && direction) {
        header.css({
            top: 0,
            position: 'fixed'
        });
    }

    if (top <= (height - 60) && !direction) {
        header.css({
            top: height - 60,
            position: 'absolute'
        });
    }
};

function ScrollPage(e) {
    //if (e.type == 'mousewheel' || (e.type == 'keydown' && (e.keyCode == 34 || e.keyCode == 33 || e.keyCode == 32))) {
    e.preventDefault();
    var direction;
    var scrollTop = $(document).scrollTop();
    var height = $(window).height();
    //var currentSection = $(e.target).parents('section').next('section').attr('id');

    //if (e.type === "keydown" && (e.keyCode == 34 || e.keyCode == 32)) {
    //    changeHeader(scrollTop, height, 1);
    //    $('body').stop().animate({
    //        scrollTop: scrollTop + height - (scrollTop == 0 ? 60 : 0)
    //    }, 1000, "linear", function () {
    //        isScrolling = false;
    //    });
    //
    //    return false;
    //} else if (e.type === "keydown" && e.keyCode == 33) {
    //    changeHeader(scrollTop, height, 0);
    //    $('body').stop().animate({
    //        scrollTop: scrollTop - height
    //    }, 1000, "linear", function () {
    //        isScrolling = false;
    //    });
    //
    //    return false;
    //}

    if (isScrolling !== true) {
        var delta = e.originalEvent.deltaY;

        direction = (delta > 0) ? 1 : 0;
        isScrolling = true;

        if (direction) {
            scrollPageDown(e, scrollTop);
        } else {
            scrollPageUp(e, scrollTop);
        }
    }
    //}
};

function scrollFunctionality(e) {
    e.preventDefault();
    var delta = e.originalEvent.deltaY;
    var target = $(e.target).parents('.slide');
    var index = $('#functionality1 .slider .slide').index(target);
    var direction = (delta > 0) ? 1 : 0;

    if (direction) {
        $('#functionality1 .slider .slide').eq(index + 1).css({top: '-' + ((index + 1) * 100) + '%'});
    } else if (index != 0) {
        $('#functionality1 .slider .slide').eq(index).css({top: 0});
    } else {
        scrollPageUp();
    }

    return false;
};

function scrollApp(e) {
    e.preventDefault();
    var delta = e.originalEvent.deltaY;
    var target = $(e.target).parents('.slide');
    var index = $('#app1 .slider .slide').index(target);
    var direction = (delta > 0) ? 1 : 0;

    if (direction) {
        $('#app1 .slider .slide').eq(index + 1).css({top: '-' + ((index + 1) * 100) + '%'});
    } else if (index != 0) {
        $('#app1 .slider .slide').eq(index).css({top: 0});
    } else {
        scrollPageUp();
    }

    return false;
};

function videoAnimate() {
    var firstWave = $('#firstWave');
    var secondWave = $('#secondWave');
    var thirdWave = $('#thirdWave');
    var fourthWave = $('#fourthWave');
    var height = $(window).height();

    firstWave.animate({opacity: 1}, 400, function () {
        firstWave.animate({opacity: 0}, 400);
        secondWave.animate({opacity: 1}, 400, function () {
            secondWave.animate({opacity: 0}, 400);
            thirdWave.animate({opacity: 1}, 400, function () {
                thirdWave.animate({opacity: 0}, 400);
                fourthWave.animate({opacity: 1}, 400, function () {
                    fourthWave.animate({opacity: 0}, 400);
                });

                $('.tabs').css('padding-top', 0);
            });
        });
    });
};

function scrollPageDown(e, scrollTop) {
    var targetSlide;
    var index;
    var nextSlide;
    var height;
    var currentSection = $(e.target).parents('section').next('section').attr('id');

    if ($(e.target).hasClass('slide-section')) {
        targetSlide = $(e.target);
    } else {
        targetSlide = $(e.target).parents('.slide-section');
    }

    index = $('#main .slide-section').index(targetSlide);
    nextSlide = $('#main .slide-section').eq(index + 1);
    height = nextSlide.height();

    changeHeader(scrollTop, height, 1);
    $('body').stop().animate({
        scrollTop: scrollTop + height - (scrollTop == 0 ? 60 : 0)
    }, 1000, "linear", function () {
        isScrolling = false;
        if (callbacks[currentSection]) callbacks[currentSection]();
    });
};

function scrollPageUp(e, scrollTop) {
    var targetSlide;
    var index;
    var nextSlide;
    var height;

    if ($(e.target).hasClass('slide-section')) {
        targetSlide = $(e.target);
    } else {
        targetSlide = $(e.target).parents('.slide-section');
    }

    index = $('#main .slide-section').index(targetSlide);
    nextSlide = $('#main .slide-section').eq(index - 1);
    height = nextSlide.height();

    changeHeader(scrollTop, height, 0);
    $('body').stop().animate({
        scrollTop: scrollTop - height
    }, 1000, "linear", function () {
        isScrolling = false;
    });
};

function fideVisibleSlide() {
    var scrollTop = $(window).scrollTop();
    var windowHeight = $(window).height();
    var currentEls = $('.slide-section');
    var result = [];
    currentEls.each(function(){
        var el = $(this);
        var offset = el.offset();
        if(scrollTop <= offset.top && (el.height() + offset.top) < (scrollTop + windowHeight))
            result.push(this);
    });
    return $(result);
};
