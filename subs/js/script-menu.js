$(function () {
    /* HEADER1{(on the top,100% bg+all ul's: */
    $('#nav1>ul>li').hover(function () {
        $('#header1 .bg').stop().animate({'height':'102px'})
        $('#nav1>ul>li').find('ul').stop().slideDown();
    },function () {
        $('#nav1>ul>li').find('ul').stop().slideUp();
        $('#header1 .bg').stop().animate({'height':'0'});
    });
    /* HEADER2:on the right, 1 downward ul : */
    $('#nav2>ul>li').hover(function () {
        $(this).find('ul').stop().slideDown();
    },function () {
        $(this).find('ul').stop().slideUp();
    });
    /* HEADER3:on the left, 1 rightward ul: */
    $('#nav3>ul>li').hover(function () {
        $(this).find('ul').stop().slideDown();
    },function () {
        $(this).find('ul').stop().slideUp();
    });

    /* HEADER4:on the bottom, 1 upward ul:*/
    $('#nav4>ul>li').hover(function () {
        $(this).find('ul').stop().slideDown();
    },function () {
        $(this).find('ul').stop().slideUp();
    });
})