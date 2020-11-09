<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>jquery</title>
</head>
<style>
td{
    width:100px;
    height: 36px;

}

</style> 
<body>
    <table border="1">
        <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
        <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
        <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
        <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
        <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>


    </table>

</body>
<script src="https://code.jquery.com/jquery-3.5.0.js"></script>

<script language="javascript">
    //4X5 테이블에 1부터 20까지 숫자를 넣어서 표시한다//
    //(.text())
    //웹페이지가 로드 될때, 그 직후 표시가된다//
    //3초 후에 숫자가 모두 사라진다//
     var nClick = null;
     var bk = null;
     var ndx = null;
     var v1=null;
     var s1 = null;
     for(var i = 0 ; i <6; i++){
     for(var j = 0 ; j < 4; j++){
        $('table tr:eq('+i+') td:eq('+j+')').text(s1++);
     }
   }
$(document)
.ready(function(){
  //setTimeout(function()){}===> 일정 시간을 설정하고 그 설정 시간후에 함수를 호출한다 //

    setTimeout(function(){
        //1초후에 테이블에 있는 글자들을 흰색으로 해서 비어있는것처럼 보이게 한다//

       $('table td').css('color','white');

    },1000)
   
    
})
//클릭시에 내가 원하는 곳의 글자가 나타나게 하기 // 
//중요한사실은 테이블에 무슨짓을 하던간에//
//테이블의 tr 과 td는 반드시 알아야한다//

.on('click','td',function(){
     //ndx 는 null값이므로 -1보다 크기때문에 참 //
     //테이블 tr eq(null) 과 td :eq(null)의 css배경을 흰색으로 한다.//
     //이렇게 하게 되면 초기상태는 흰색 배경이다 //
    if(ndx>-1)  $('table tr:eq('+v1+') td:eq('+ndx+')').css('background-color','white');

    //함수를 다시콜백하기위해서 ndx 를 전역변수로 지정해준다.//
    //이전것의 tr 인덱스 , tr 바탕색을 복구//
    // 현재tr의 글자색//

    ndx = $(this).index();//현재 td의 인덱스//
    //'td'에서 가장가까운 tr의 인덱스를 찾아서 v1에 넣어주기//
    v1= $(this).closest('tr').index();  // 현재 tr의 인덱스
    //$(this).css('color','white');
    //결과는 배경색은 검정색// 
    $(this).css('background-color','black');

    console.log('hello');
   



   // if(ndx>-1) $('table tr:eq('+ndx+')').css('background-color',bk);
    //함수를 다시콜백하기위해서 ndx 를 전역변수로 지정해준다.//
    //이전것의 tr 인덱스 , tr 바탕색을 복구//
   //$('table tr:eq('+ndx+')').css('background-color','bk');
   


})



</script>  