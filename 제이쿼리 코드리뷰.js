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
        <td>성별</td><td><input type=radio value='female' id=female name=gender>여성
        <input type=radio id=male value='male' name=gender>남성</td>
    </tr>
    <tr>
        <td>모바일</td><td><input type=phone id=mobile></td>
    </tr>
    <tr>
        <td colspan=2>
            <input type=button id=btnSubmit value='추가'>&nbsp;
            <input type=button id=btnReset value='지우기'></td>
            <input type=button id=btnDelete value="제거">
            <input type="button" id=update value="수정">

    </tr>
    </table>


</body>
<script src="https://code.jquery.com/jquery-3.5.0.js"></script>

<script language="javascript">

   var intest=null;
   
   var nClick=null;
//1)제이쿼리가 dom에 접근할때//
$(document)
//클릭 이벤트로 dom 접근, #btnSumbit이라는 객체를 클릭이벤트 핸들링했을 때 할일을 익명함수로 ==>콜백//
.on('click','#btnSubmit',function(){
    //===>값을 가져와서 테이블에 추가해주는 작업을 하기위함이다 <===//
    //1)
    //dom 에 있는 #txtname 의 값을 가져오기 (.val());
    str1= $('#txtname').val();
    //2)
    //dom 에 있는 라디오 버튼의 값을 가져오기 (.val());
    str2= $("input:radio[name=gender]:checked").val();
    //3)
   //dom 에 있는 #mobile 의 값을 가져오기 (.val());
    str3= $('#mobile').val();
   //추가 했을때,텍스트 필드와 라디오 버튼 을 비우기위함//
   //.val()에 값이들어가면 setter 역할을 , .val()에 값이 비어있으면 getter역할을 하게 된다.//
    $('#txtname').val('');
    $('#mobile').val('');
    $("input:radio[name='gender']:radio[value='female']").prop("checked",false);
    $("input:radio[name='gender']:radio[value='male']").prop("checked",false);
    //라디오버튼은 true 일때는 checked , false 일때는 unchecked 이다 (객체의 값)//
    
    //만들어놓은 0번째 테이블을 .append()함수를통해 동적으로 추가할수있다(테이블의 열과 행을 정해주지않아도 입력한값에따라 자동적으로 추가하게 한다)
    //유의 해야할점은 테이블을 추가해야하는데 값을 추가하게되면 테이블의 구조가 생성되지않는다. 반드시 테이블 레코드 구조를 잡아준다//
    $('table:eq(0)').append('<tr><td>'+str1+'</td><td>'+str2+'</td><td>'+str3+'</td></tr>');


})
//클릭이벤트시 모든 텍스트필드 , 라디오 버튼 을 언체크 하게 하는 (초기화)하는 역할을한다.//
//제이쿼리가 #btnRest이라는 객체를 클릭이벤트로 핸들링하여 객체에 접근할때 , 할일을 익명함수로 콜백해준다//
.on('click','#btnReset',function(){
   //.val()함수를 이용하여서 공백으로 만들어준다//
        $('#txtname').val('');
        $('#mobile').val('');
        //라디오버튼은 모두 그 값을 false 로 하게되면 uncheked가 되므로 false 로 설정해준다//
        $("input:radio[name='gender']:radio[value='female']").prop("checked",false);
        $("input:radio[name='gender']:radio[value='male']").prop("checked",false);
})

$(document)
//첫번째 테이블 의 레코드를눌렀을때 테이블에 있는 데이터를 가져와서 텍스트 필드에 입력하려고한다.//
//제이쿼리가 테이블 0번째의 테이블레코드를 클릭이벤트로 핸들링할때 할일을 익명함수에 콜백해준다//
.on('click','table:eq(0) tr',function(){ 
    //여기서 this는 'table:eq(0)객체 를 의미한다//'
    //.find()함수를 통해서 동적으로 만들어놓은 테이블에 0번째의 데이터 값을 가져온다 그리고 name 변수에 저장한다//
     name=$(this).find('td:eq(0)').text();
     //find()함수를 통해서 동적으로 만들어 놓은 테이블에 1번째 데이터 값을 가져오고 그리고 checked 변수에 저장//
     //여기서 주의할 사항은 테이블에서 라디오버튼의 데이터를 가져올때는 .text()를 이용해서 가져오도록한다//
     //테이블에서는 value 를 설정해주지않았고 데이터를 가져올때는 value 를 사용하는것을 권장하지않는다.//
     checked1= $(this).find("td:eq(1)").text();
     //가져온데이터를 checked1 에 저장,
     //그리고 checked1인 라디오버튼의 속성을 checked로..//
     gender=$('input:radio[name=gender]:input[value="'+checked1+'"]').prop("checked", true);
   //우리가 만든 동적 테이블에서 2번째 인덱스에 위치한 테이블데이터를 가져온다//
     mobile=$(this).find('td:eq(2)').text();
     //그리고 비어있는 텍스트 필드에 가져온 값을설정해준다 (setter)//
     $('#txtname').val(name);
     //비어있는 텍스트 필드에 가져온 값을 설정해준다 (setter)//
     $('#mobile').val(mobile);
     //비어있는 라디오 버튼에 가져온 값을 설정해준다 (setter)//
     $('#gender').val(gender);

      //테이블의 레코드를 클릭할시 색을 바꾸게 하고싶은 작업//
      //클릭을 한번 하면 노란색으로 바뀌게하고 한번 더 클릭하게되면 클릭이벤트에 의해서 하얀색 배경으로 바뀌게 하는작업//
      //위의 nClick 을 전역변수로 선언 , 클릭한 인덱스를 저장,//

      if(nClick>-1){
         
       $('table:eq(0) tr:eq('+nClick+')').css('background-color','white');
      }
      nClick=$(this).index();
  
      $(this).css('background-color','yellow');





})
//클릭이벤트 핸들링시에 할일 콜백//
.on('click','#btnDelete',function(){

  //#btnDelete 를 클릭했을시에 모든데이터를 테이블에서 삭제//
  //.remove()함수를 이용하여 모든 데이터를 삭제해준다//
    $('table:eq(0) tr').eq(0).remove();
    console.log('hi');
})

.on('click','#update',function(){
    //위의 전역변수 nClick 에 인덱스 값을 저장//
    //어디를 클릭했을때(인덱스) 몇번째 테이블 레코드를 눌렀는지를 변수에 저장//
    
  
    update1= $('#txtname').val();
    update2= $("input:radio[name=gender]:checked").val();
    update3= $('#mobile').val();
  
   $(' table:eq(0) tr:eq('+nClick+') td:eq(0)').html(update1)
   $(' table:eq(0) tr:eq('+nClick+') td:eq(1)').html(update2)
   $(' table:eq(0) tr:eq('+nClick+') td:eq(2)').html(update3)


})



</script> 