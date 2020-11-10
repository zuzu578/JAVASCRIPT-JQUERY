    //<td>클릭시 바탕색이 블루 레드 그린이 나타나도록//
    //closest(),table tr:eq(1) td:eq(1)'.css('background','blue');
    //인덱스를 이용하여테이블의 가장 가까운 인덱스를 저장 그후 색을변경//
$(document)
.on('click','td ',function(){
    //td라는 객체의 가장 가까운 tr 객체에 접근 그리고 인덱스를 변수 p에저장 
    var p = $(this).closest('tr').index();
    //가까운 좌표 p column 그리고 0번째 1번쨰 2번째 에 파랑 빨강 초록을 넣음..
   $(' table tr:eq('+p+') td:eq('+0+')').css('background','blue');
   $(' table tr:eq('+p+') td:eq('+1+')').css('background','red');
   $(' table tr:eq('+p+') td:eq('+2+')').css('background','green');
})

