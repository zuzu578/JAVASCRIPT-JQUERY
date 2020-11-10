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
      <td>1</td> <td>2</td> <td>3</td>

  </tr>

  <tr>
    <td>4</td> <td>5</td> <td>6</td>

</tr>

<tr>
    <td>7</td> <td>8</td> <td>9</td>

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
var intSet = null;
$(document)
//값을 입력하면 테이블에 값이 들어가지는 방법//

//어디위치에 입력할것인지 테이블의 좌표 를 선택//
//tr = 세로 (column)열 , td = 가로(row)행//
//마치 2차원 배열처럼 해주면된다//
.on('click','#btnGo',function(){
    ////테이블에 사진넣기
    var str='<img src="">'
    var rnum=$('#rnum').val();
    var cnum=$('#cnum').val();
    //$('table tr:eq('+rnum+')td:eq('+cnum+')').text(str);
    //html로써 사진을 넣는다
    //setTimeout//
    //일정 시간후 함수를 호출하는형식//
    setTimeout(function(){
        $('table tr:eq('+rnum+') td:eq('+cnum+')').html(str);
        },3000)
    //setInterval//
    //일정시간 간격으로 함수를 호출, 반복해주는 역할을 함//
       intSet=setInterval(function(){
            $('table tr:eq('+rnum+') td:eq('+cnum+')').text(new Date());
        },1000);

    
    //
    //var row='<tr><td>10</td><td>11</td><td>12</td></tr>';
    //append 메소드 = 추가하다 
    //append 시, td갯수만큼 맞춰서 사용한다//
    //append는 테이블 밑에 더 추가가된다 //
    //$('table tr:eq(0)').append(row);
    //prepend메소드는 앞에있는 테이블이 추가된다 //
    //$('table').prepend(row);


  
    return false;
 
})

// 사용법//
.on('click','#btnStop',function(){
  if(intSet!=null) clearInterval(intSet);
});
</script>