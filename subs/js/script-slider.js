var slide=$('#slider ul li'),
current = 0;
setInterval(()=>{
var prev = slide.eq(current);
current++;
move(prev, 1, 0);
if(current==slide.size()){
current=0;
};
var next = slide.eq(current);
move(next, 0, 1);
},3000);
function move(tg, start, end){
tg.css({opacity: start}).stop().animate({opacity:end});
};