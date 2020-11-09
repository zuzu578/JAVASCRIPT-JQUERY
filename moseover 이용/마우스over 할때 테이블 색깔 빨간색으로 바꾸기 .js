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
    </table>

</body>
<script src="https://code.jquery.com/jquery-3.5.0.js"></script>

<script language="javascript">

   var intest=null;
   var nClick=null;
   var bk =null;
   var bk1 =null;
   var p = null;
   
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
   //예전인덱스가 -1보다 크면 
    if(4%2==0){
         bk 
    }else{
        bk1
    }
    bk = $('table tr:even').css('background-color','yellow');
    bk1=$('table tr:odd').css('background-color','blue');
    p = $(this).index();
    console.log('hi');
    $('table tr:eq('+p+')').css('background-color','red');


    
    //바탕색을 red로 변경//
    //이전에 있던 tr은 원래 색으로 복구//
    //이전 tr의 바탕색을 복구.
    //.css('background-color','red');
    //var bk = ~.css('background-color')
    //.index()사용 , 현재 바탕색을 보관 
    //현재의 바탕색을 red로 변경//
})



</script> 