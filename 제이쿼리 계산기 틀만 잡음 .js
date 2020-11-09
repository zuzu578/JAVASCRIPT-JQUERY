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
        <tr><td>0</td><td>1</td><td>2</td><td>3</td></tr>
        <tr><td>4</td><td>5</td><td>6</td><td>7</td></tr>
        <tr><td>8</td><td>9</td><td>+</td><td>/</td></tr>
        <tr><td>*</td><td>result</td><td>correct</td></td></tr>
        


    </table>
    <input type="id" id="idField">

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
     
     var s = null;
    
$(document)
.ready(function(){

   
})

.on('click','td',function(){
    
    if(ndx>-1)  $('table tr:eq('+v1+') td:eq('+ndx+')').css('background-color','white');

    ndx = $(this).index();//현재 td의 인덱스//
 
    v1= $(this).closest('tr').index();  // 현재 tr의 인덱스
  
    $(this).css('background-color','powderblue');

    console.log('hello');
    //원하는 테이블위치에 따라 값을 가져옴.//
    var no = $('table tr:eq('+v1+') td:eq('+ndx+')').text();

    var ar1 = new Array();
    $("#idField").val(no);

    if(no=="result"){
        console.log("result");
        

    }else if(no =="correct"){

        console.log("correct");
        $("#idField").val("");

    }else if(no =="+"){
        console.log("+");

    }else if(no=="*"){
        console.log("*");

    }else if(no=="/"){
        console.log("/");

    }
})



</script>  