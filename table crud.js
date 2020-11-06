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
   //var nClick ==> 인덱스를 담을 변수//
   var nClick=null;
//1)Create ==>추가 //
$(document)
//제이쿼리가 #btnSubmit ===>접근 , 익명함수로 콜백//
.on('click','#btnSubmit',function(){
    //사용자가 입력한 텍스트의 내용을 가져온다//
    str1= $('#txtname').val();
    //사용자가 체크한 라디오버튼의 값을 가져온다//
    str2= $("input:radio[name=gender]:checked").val();
    //사용자가 입력한 텍스트의 내용을 가져온다//
    str3= $('#mobile').val();
    //입력을 한후에 텍스트 필드,라디오 필드의 내용을 다 초기화 해준다//
    $('#txtname').val('');
    $('#mobile').val('');
    $("input:radio[name='gender']:radio[value='female']").prop("checked",false);
    $("input:radio[name='gender']:radio[value='male']").prop("checked",false);

    

    //동적인 테이블을 추가해준다//
    $('table:eq(0)').append('<tr><td>'+str1+'</td><td>'+str2+'</td><td>'+str3+'</td></tr>');
     
   
})
//2)Delete ==>삭제//
.on('click','#btnReset',function(){
    //제이쿼리가 #btnRest 이라는 객체에 접근해서 익명함수로 콜백,//
        $('#txtname').val('');
        $('#mobile').val('');
        $("input:radio[name='gender']:radio[value='female']").prop("checked",false);
        $("input:radio[name='gender']:radio[value='male']").prop("checked",false);
})

$(document)
//3)select ==>값 조회(가져오기)//
//!==>중요한 사실은 테이블에서 특정한 값을 가져올때는 .text()를 반드시 사용해주어야한다//
.on('click','table:eq(0) tr',function(){ 
    //첫번째 테이블(table:eq(0)tr)을 눌렀을때 익명함수로 콜백//
     //첫번째 테이블에 저장된 데이터 인덱스 0번(이름)을 가져온다//
     name=$(this).find('td:eq(0)').text();
     //두번째 테이블에 저장된 데이터 인덱스 1번(라디오 - 성별) 체크된 값을 (라디오버튼의값)을 테이블에서 가져올땐 text()를쓴다//
     checked1= $(this).find("td:eq(1)").text();
     gender=$('input:radio[name=gender]:input[value="'+checked1+'"]').prop("checked", true);
     //세번째 테이블에 저장된 데이터 인덱스 2번(모바일)의 값을 text()로 써서 가져온다//
     mobile=$(this).find('td:eq(2)').text();
     $('#txtname').val(name);
     $('#mobile').val(mobile);
     $('#gender').val(gender);

     //클릭한 tr바탕색이 yellow 로 바뀐다.
     //클릭된 tr의 인덱스 값을 nClick에 저장// 
    
      //클릭한 tr 의 배경을 지정해준다//




      if(nClick>-1){
          //한번 더누르면 하얀색//
       $('table:eq(0) tr:eq('+nClick+')').css('background-color','white');
      }
      nClick=$(this).index();
      //누르면 노란색//
      $(this).css('background-color','yellow');
   
   
     
     	

})
//3)update ==>업데이트 //
.on('click','#btnDelete',function(){
   
    //클릭한 tr이 삭제(.remove())
    //이름,성별,모바일 이 다 비워진다.
    //테이블지우기//
    $('table:eq(0) tr').eq(0).remove();
    console.log('hi');
})
.on('click','#update',function(){
    //클릭시 선택된 tr내의 이름 성별 모바일값이//
    //입력필드에 들어온 후,입력필드의 내용 수정,
    //업데이트 버튼을 누르면 선택된 tr내의 td에 
    //고친 값을 넣는다.
    //수정//
    update1= $('#txtname').val();
    update2= $("input:radio[name=gender]:checked").val();
    update3= $('#mobile').val();
  //동적 테이블을 위에서 만들었으므로 동적테이블의 좌표에다가 수정한 내용을 담은 변수를 넣어준다//
  //(nclick을 이용해서 클릭된 부분을 찾아서 바꾸게함//
   $(' table:eq(0) tr:eq('+nClick+') td:eq(0)').html(update1)
   $(' table:eq(0) tr:eq('+nClick+') td:eq(1)').html(update2)
   $(' table:eq(0) tr:eq('+nClick+') td:eq(2)').html(update3)
  

})



</script>