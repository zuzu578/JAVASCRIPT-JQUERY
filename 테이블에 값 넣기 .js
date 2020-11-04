<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>jquery</title>
</head> 
<body> 
 <table style="border:1px solid black;">
  <tr>
      <td></td> <td></td> <td></td> <td></td> <td></td>

  </tr>

  <tr>
    <td></td> <td></td> <td></td> <td></td> <td></td>

</tr>

<tr>
    <td></td> <td></td> <td></td> <td></td> <td></td>

</tr>
<tr>
    <td></td> <td></td> <td></td> <td></td> <td></td>

</tr>

<tr>
    <td></td> <td></td> <td></td> <td></td> <td></td>

</tr>


    </table><br>
    <input type="text" id="txtstr">
    <input type="text" id='rnum' size=3>
    <input type="text" id='cnum' size=3>
    <input type="button" id='btnGo' value="선택">
    <input type="button" id="btnStop" value="시계정지">
    



</body>
<script  src="https://code.jquery.com/jquery-3.5.0.js"></script>

<script language="javascript">
//td안의 텍스트를 가져오는 방법// 
//태그를 선택할때는 #을 쓰지않는다//
var intset = null;
$(document)

.on('click','#btnGo',function(){
   //rnum=세로 cnum=가로//  var rnum=$('#rnum').val();
   //테이블에 값넣는방법//
   
       
     $('table tr:eq('+0+') td:eq('+0+')').text(9);
    $('table tr:eq('+0+') td:eq('+1+')').text(2);
    $('table tr:eq('+0+') td:eq('+2+')').text(25);
    $('table tr:eq('+0+') td:eq('+3+')').text(18);
    $('table tr:eq('+0+') td:eq('+4+')').text(11);
    $('table tr:eq('+1+') td:eq('+0+')').text(3);
    $('table tr:eq('+1+') td:eq('+1+')').text(21);
    $('table tr:eq('+1+') td:eq('+2+')').text(19);
    $('table tr:eq('+1+') td:eq('+3+')').text(12);
    $('table tr:eq('+1+') td:eq('+4+')').text(10);
    $('table tr:eq('+2+') td:eq('+0+')').text(22);
    $('table tr:eq('+2+') td:eq('+1+')').text(20);
    $('table tr:eq('+2+') td:eq('+2+')').text(13);
    $('table tr:eq('+2+') td:eq('+3+')').text(6);
    $('table tr:eq('+2+') td:eq('+4+')').text(4);
    $('table tr:eq('+3+') td:eq('+0+')').text(16);
    $('table tr:eq('+3+') td:eq('+1+')').text(14);
    $('table tr:eq('+3+') td:eq('+2+')').text(7);
    $('table tr:eq('+3+') td:eq('+3+')').text(5);
    $('table tr:eq('+3+') td:eq('+4+')').text(23);
    $('table tr:eq('+4+') td:eq('+0+')').text(15);
    $('table tr:eq('+4+') td:eq('+1+')').text(8);
    $('table tr:eq('+4+') td:eq('+2+')').text(16);
    $('table tr:eq('+4+') td:eq('+3+')').text(24);
    $('table tr:eq('+4+') td:eq('+4+')').text(17);
    
 

  
   
})

// 사용법//


</script>