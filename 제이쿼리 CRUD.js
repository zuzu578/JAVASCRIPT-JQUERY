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
$(document)
//btnSumit ==>추가 버튼이다//

//제이쿼리가 #btnSubmit 라는 객체를 이벤트 핸들링(클릭)을 했을때 할일을 익명함수에 담아서 콜백한다//
.on('click','#btnSubmit',function(){
    //이름의 값을 필드에서 가져온다//
    str1= $('#txtname').val();
    //라디오의 값을 가져온다//
    str2= $("input:radio[name=gender]:checked").val();
    //모바일의 값을 필드에서 가져온다//
    str3= $('#mobile').val();
    //다 입력했을때 공란처럼 보이도록 초기화해준다//
    $('#txtname').val('');
    $('#mobile').val('');
    $("input:radio[name='gender']:radio[value='female']").prop("checked",false);
    $("input:radio[name='gender']:radio[value='male']").prop("checked",false);



    //append.() == > 동적 테이블을 만들기위한 방법중하나인데//
    //앞에서부터 순차적으로 증가하는 함수이다//
    //주의할점은 .append() 테이블 구조를 만들어줘야한다//
    $('table:eq(0)').append('<tr><td>'+str1+'</td><td>'+str2+'</td><td>'+str3+'</td></tr>');


})
//리셋버튼 ==> !이버튼을 누르게되면 필드에있는 값들이 지워진다//
//#btnReset 객체에 접근하고 할일을 익명함수로 써서 콜백해준다//
.on('click','#btnReset',function(){
    //val("")==>공백처럼 보이게 초기화작업을 해준다//
        $('#txtname').val('');
        $('#mobile').val('');
        $("input:radio[name='gender']:radio[value='female']").prop("checked",false);
        $("input:radio[name='gender']:radio[value='male']").prop("checked",false);
})

$(document)
//첫번째 테이블의 테이블 레코드를 클릭할때의 할일을 익명함수로 만들어서 콜백//
//원하는 열의 테이블 레코드를 클릭시 텍스트 필드, 라디오 필드에 내용을 전달하는 역할을 한다//
.on('click','table:eq(0) tr',function(){ 
    //this ===> 'table:eq(0) tr'//
    //this 에서 찾는건데 td의 인덱스가 0인 값을 찾아서 가져온다//
    //현재 우리가 입력한 내용이 이름 , 성별 , 모바일 번호 이기때문에//
    //테이블 데이터0 ==> 이름 ,
    //테이블 데이터1 ==>성별 ,
    //테이블 데이터2==> 모바일,
     
     //*테이블 데이터 0 번의 값을 가져온다(찾는다)==>0번은 이름//
     name=$(this).find('td:eq(0)').text();
     //*테이블 데이터 1 번의 값을 가져온다(찾는다)==>1번은 라디오버튼(성별)//
     //*체크된 값을 (라디오버튼의값)을 테이블에서 가져올땐 text()를쓴다//
     //값을 테이블에서 가져올때 테이블은 val()을 사용할수없다//
     checked1= $(this).find("td:eq(1)").text();
     //개인적으로 prop을 쓰는것을 추천한다.//
     //테이블에서 가져온 라디오버튼의 값을 변수에 담아주고,value 에 넣어준다//
     gender=$('input:radio[name=gender]:input[value="'+checked1+'"]').prop("checked", true);
     //모바일 같은 경우도 테이블 데이터에 2번째 인덱스에서 가져온다//
     mobile=$(this).find('td:eq(2)').text();
      
      //마지막으로 가져온 값들을 변수에 담은것들을 val()에다가 넣어준다//

      //이름//
     $('#txtname').val(name);
     //모바일//
     $('#mobile').val(mobile);
     //성별//
     $('#gender').val(gender);
     //클릭한 tr바탕색이 yellow 로 바뀐다.
     //클릭된 tr의 인덱스 값을 nClick에 저장// 
     // $(this).css('background','yellow');
      //nClick=$('table:eq(0)').tr.eq(0).text();
      //클릭한 tr 의 배경을 지정해준다//
      if(nClick>-1){
          //한번 더누르면 하얀색//
        $('table:eq(0) tr:eq('+nClick+')').css('background-color','white');
      }
      //table:eq(0) tr의 인덱스를 가져와서 nClick 에 넣어준다//
      nClick=$(this).index();
      //table:eq(0) tr ==>this ===>눌렀을때,
      $(this).css('background-color','yellow');





})
.on('click','#btnDelete',function(){

    //클릭한 tr이 삭제(.remove())
    //이름,성별,모바일 이 다 비워진다.
    //테이블지우기//
    //table 첫번째 에있는 0번째 를 지운다//
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