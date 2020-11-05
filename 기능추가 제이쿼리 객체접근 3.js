<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>jquery</title>
</head>
<style>
    td{
        width:50px;
        height: 30px;
    }
    .class0{
        background:blue;
    }
    .class1{
        background:red;
    }
    .class2{
        background:green;
    }
   
   


</style> 
<body>
    <table border="1">
    </table><br><br>
    <table>
    <tr>
        <td>이름</td><td><input type=text id=txtname size=12></td>
    </tr>
    <tr>
        <td>성별</td><td><input type=radio value = '여자' id=female name=gender>여성
        <input type=radio id=male value = '남자'name=gender>남성</td>
    </tr>
    <tr>
        <td>모바일</td><td><input type=phone id=mobile></td>
    </tr>
    <tr>
        <td colspan=2><input type=button id=btnSubmit value='추가'>&nbsp;
            <input type=button id=btnReset value='지우기'></td>
          
    </tr>
    </table>
  



</body>
<script src="https://code.jquery.com/jquery-3.5.0.js"></script>

<script language="javascript">
   //이름 성별 생년월일을 입력하고 추가 버튼을 (btnSubmit)누르면
   //테이블에 한줄(tr)이 추가되면서 동시에 3개의(td)가 같이 들어가는데
   //각 td는 이름 성별 모바일번호 를 포함한다//
$(document)
.on('click','#btnSubmit',function(){
        str1= $('#txtname').val();
        str2= $(":input:radio[name=gender]:checked").val();
        str3= $('#mobile').val();
        $('table:eq(0)').append(str1);
        //$('table').append("<tr><td>"+str1+"</td><tr>");
        $('table:eq(0)').append(str2);
        $('table:eq(0)').append(str3+"<br>");
        $('#txtname').val('');
        $('#mobile').val('');
        $("input:radio[name='gender']:radio[value='여자']").prop("checked",false);
        $("input:radio[name='gender']:radio[value='남자']").prop("checked",false);
    
   
})
.on('click','#btnReset',function(){
        $('#txtname').val('');
        $('#mobile').val('');
        $("input:radio[name='gender']:radio[value='여자']").prop("checked",false);
        $("input:radio[name='gender']:radio[value='남자']").prop("checked",false);


})
//테이블클릭시 테이블에 있는 값을 텍스트 필드에 전달하는 역할
$(document)
.on('click','table:eq(0) ',function(){
     a1 = $(this).eq(0).text();
	
           
   alert(a1+("\n"));	

})
    



</script>