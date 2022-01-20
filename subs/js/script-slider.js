$(function () {
    var slide1=$('#slide1 ul li'),
    current1 = 0;
    setInterval(()=>{
    var prev1 = slide1.eq(current1);
    current1++;
    move1(prev1, 1, 0);
    if(current1==slide1.size()){
    current1=0;
    };
    var next1 = slide1.eq(current1);
    move1(next1, 0, 1);
    },3000);
    function move1(tg1, start, end){
    tg1.css({opacity: start}).stop().animate({opacity:end});
    };

    var slide2 = $('#slide2 ul li'),
    current2 = 0;
    setInterval(() => {
    var prev2 = slide2.eq(current2);
    current2++;
    move2(prev2,0,'100%');
    if (current2==slide2.size()) {
    current2=0;
    }
    var next2 = slide2.eq(current2);
    move2(next2,'-100%',0);
    }, 2000);
    function move2(tg1, start, end) {
    tg1.css({left:start}).stop().animate({left:end},1000)
    };
})