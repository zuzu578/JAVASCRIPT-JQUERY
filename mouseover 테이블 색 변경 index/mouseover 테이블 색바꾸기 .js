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
        <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
        <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
        <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
        <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
        <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
        <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
        <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
        <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
        <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
        <tr><td>&nbsp;</td><td>&nbsp;</td><td>&nbsp;</td></tr>
       
    </table>

</body>
<script src="https://code.jquery.com/jquery-3.5.0.js"></script>

<script language="javascript">

   var intest=null;
   var nClick=null;
   var bk =null;
   var bk1 =null;
   var p = null;
   var ndx = -1;
   var past = null;
   var now = null;



   
$(document)
.ready(function(){
    console.log('hh');
    $('table tr:even').css('background-color','yellow');
    console.log('hh');
    $('table tr:odd').css('background-color','blue');
})
//인덱스가 짝수인 tr은 노랑 바탕 //:odd , even ,css
//인덱스가 홀수인 tr은 바탕색을 파랑으로 
.on('mouseover','tr',function(){
    //현재의tr의 인덱스 와 현재 tr의 바탕색을 저장//
    if(ndx>-1) $('table tr:eq('+ndx+')').css('background-color',bk);
    //함수를 다시콜백하기위해서 ndx 를 전역변수로 지정해준다.//
    //이전것의 tr 인덱스 , tr 바탕색을 복구//
   //$('table tr:eq('+ndx+')').css('background-color','bk');
    ndx = $(this).index();//현재 tr의 인덱스//
    bk = $(this).css('background-color');// 현재tr의 바탕색//
    $(this).css('background-color','red');

  
})



</script> 