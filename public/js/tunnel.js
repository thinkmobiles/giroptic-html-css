/**
 * Created by Tony on 26.10.2015.
 */
$('.card-month').click(function(){

    var dropBlock = $(this).parent().find('.drop');

    if( dropBlock.is(':hidden') ) {
        dropBlock.slideDown();


        $(this).addClass('active');


        $('.drop').find('li').click(function(){


            var selectResult = $(this).html();


            $(this).parent().parent().find('input').val(selectResult);


            $(this).parent().parent().find('.slct-month').removeClass('active').html(selectResult);


            dropBlock.slideUp();
        });


    } else {
        $(this).removeClass('active');
        dropBlock.slideUp();
    }


    return false;
});

$('.card-years').click(function(){

    var dropBlock = $(this).parent().find('.droped');

    if( dropBlock.is(':hidden') ) {
        dropBlock.slideDown();


        $(this).addClass('active');


        $('.drop').find('li').click(function(){


            var selectResult = $(this).html();


            $(this).parent().parent().find('input').val(selectResult);


            $(this).parent().parent().find('.slct-month').removeClass('active').html(selectResult);


            dropBlock.slideUp();
        });


    } else {
        $(this).removeClass('active');
        dropBlock.slideUp();
    }


    return false;
});