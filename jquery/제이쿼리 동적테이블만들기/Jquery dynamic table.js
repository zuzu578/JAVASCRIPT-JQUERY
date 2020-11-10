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
    <div class="table-name">
     <h1>first table[0]</h1>
    </div>
        <table border="1">
    </table><br><br>
    <div class="table-name">
        <h1>second table[1]</h1>
    </div>

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
//이 함수에서 할일은 버튼을 눌렀을때 값을 테이블에 저장하는 역할을 한다//
.on('click','#btnSubmit',function(){
    //--->텍스트 필드,라디오버튼에서 값을 입력하고 그 입력한 값을 가져오는 역할<---//
    //값입력은 웹브라우저에서 txt 필드 , 라디오 버튼을 통해서 사용자가 값을 입력하게됨.//
    //#txtname 인 객체에 접근 하고 값을 가져옴 //
    str1= $('#txtname').val();
      //라디오 객체에 접근 하고 값을 가져옴 //
    str2= $(":input:radio[name=gender]:checked").val();
    //#mobile인 객체에 접근하고 값을 가져옴//
    str3= $('#mobile').val();
    //--->사용자가 값을 다 넣고 버튼을 누르면 그 필드의 값들이 초기화 되게 하는역할<---//
    //#txtname라는 객체에 접근해서 그 값을 공백으로 설정해서 초기화한다//
    $('#txtname').val('');
    //#mobile이라는 객체에 접근해서 그 값을 공백으로 설정해서 초기화한다//
    $('#mobile').val('');
    //라디오버튼의 객체에 접근해서 그 값을 unchecked(false)로 설정해서 초기화를 해준다//
    $("input:radio[name='gender']:radio[value='여자']").prop("checked",false);
    $("input:radio[name='gender']:radio[value='남자']").prop("checked",false);
    //테이블을 동적으로 추가해주기 위해서 .append()라는 함수를 사용한다.//
    //'table:eq(0)'에서 eq()라는것은 인덱스와 비슷한 역할을 하며 즉 //
    // 'table:eq(0)'는 1번째 테이블이라는 뜻이다//
    // 1번째 테이블에 위에서 사용자가 입력한 값을 불러오는 내용을 변수에 담았기 때문에 그 저장된내용을//
    //변수로 담은 변수를 .append() 안에다가 추가해주기만 하면 된다.//

    //첫번째 테이블에 (str1)이라는 사용자가 입력한 값을 저장해준다//
    $('table:eq(0)').append(str1);//==>이름<==//
     //첫번째 테이블에 (str2)이라는 사용자가 입력한 값을 저장해준다//
    $('table:eq(0)').append(str2);//==>성별<==//
     //첫번째 테이블에 (str3)이라는 사용자가 입력한 값을 저장해준다//
    $('table:eq(0)').append(str3+"<br>");//==>모바일번호<==//
    
   
})
//버튼을 눌렀을때 필드안에 있는 모든내용들을 초기화시켜주는 역할을 한다//
.on('click','#btnReset',function(){
        $('#txtname').val('');
        $('#mobile').val('');
        $("input:radio[name='gender']:radio[value='여자']").prop("checked",false);
        $("input:radio[name='gender']:radio[value='남자']").prop("checked",false);


})
//테이블클릭시 테이블에 있는 값을 텍스트 필드에 전달하는 역할
$(document)
//첫번째 인덱스의 테이블 (1번째 테이블) 의 객체에 접근//
.on('click','table:eq(0)',function(){  
    //debug//
    console.log("hello world");
   //name= $(this).find('td:eq(0)').text();
   //mobile= $(this).find('td:eq(0)').text();
   name = $('table:eq(0) td:eq(0)').text();
   console.log("hello world");
   alert(name);
    
     $('#txtname').val(name);
     $('#mobile').val( mobile);
   
     
     	

})
    



</script>