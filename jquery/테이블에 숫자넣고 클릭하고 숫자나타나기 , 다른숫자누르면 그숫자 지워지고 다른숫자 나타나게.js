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
     var count = 1; 
$(document)
.ready(function(){
    //텍스트 사라지게하기//
    //$('table tr:eq(0) td:eq(1)').css('color','white');
    setTimeout(function(){
       $('table td').css('color','white');
    
    },1000)
    for(var i = 0 ; i<5; i++){
       for(var j = 0 ; j <4; j++){
           $('table tr:eq('+i+') td:eq('+j+')').text(count++);
       }
    }
    /*
    $('table tr:eq('+0+') td:eq('+0+')').text(1);
    $('table tr:eq('+0+') td:eq('+1+')').text(2);
    $('table tr:eq('+0+') td:eq('+2+')').text(3);
    $('table tr:eq('+0+') td:eq('+3+')').text(4);
    $('table tr:eq('+1+') td:eq('+0+')').text(5);
    $('table tr:eq('+1+') td:eq('+1+')').text(6);
    $('table tr:eq('+1+') td:eq('+2+')').text(7);
    $('table tr:eq('+1+') td:eq('+3+')').text(8);
    $('table tr:eq('+2+') td:eq('+0+')').text(9);
    $('table tr:eq('+2+') td:eq('+1+')').text(10);
    $('table tr:eq('+2+') td:eq('+2+')').text(11);
    $('table tr:eq('+2+') td:eq('+3+')').text(12);
    $('table tr:eq('+3+') td:eq('+0+')').text(13);
    $('table tr:eq('+3+') td:eq('+1+')').text(14);
    $('table tr:eq('+3+') td:eq('+2+')').text(15);
    $('table tr:eq('+3+') td:eq('+3+')').text(16);
    $('table tr:eq('+4+') td:eq('+0+')').text(17);
    $('table tr:eq('+4+') td:eq('+1+')').text(18);
    $('table tr:eq('+4+') td:eq('+2+')').text(19);
    $('table tr:eq('+4+') td:eq('+3+')').text(20);
    */
})
//클릭시에 내가 원하는 곳의 글자가 나타나게 하기 // 
.on('click','td',function(){
    //
    if(ndx>-1)  $('table tr:eq('+v1+') td:eq('+ndx+')').css('color','white');
    
    //함수를 다시콜백하기위해서 ndx 를 전역변수로 지정해준다.//
    //이전것의 tr 인덱스 , tr 바탕색을 복구//
    // 현재tr의 글자색//

    ndx = $(this).index();//현재 td의 인덱스//
    v1= $(this).closest('tr').index();  // 현재 tr의 인덱스
    $(this).css('color','black');


})



</script> 