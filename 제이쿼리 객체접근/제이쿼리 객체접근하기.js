<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>jquery</title>
</head>
<body>
 <table>
  <tr>
      <td align="right">실명</td>
      <td><input type="text" id="txtname" size=20></td>
  </tr>
  <tr>
      <td>생년월일</td>
      <td><input type="date" id="txtbirth"></td></tr>

   <tr>
    <td>성별</td>
   <td><input type="radio" value="여자" id="female" name="gender">여성&nbsp;
        <input type="radio" value="남자" id="male" name="gender">남성</td>
  </tr>
  <tr>
      <td>사용자아이디</td>
      <td><input type="text"id="userid" size="12"></td>
  </tr>
  <tr>
      <td>비밀번호</td>
      <td><input type="password" id="passcode1" size="12"></td>
      <tr><td>비밀번호 확인</td></tr>
      <td><input type="password" id="passcode2" size="12"></td>
      <tr><td>거주지역</td>
        <td><select id="selArea">
            <option>서울</option><option>경기</option>
            <option>강원</option><option>충남</option>
            <option>충북</option><option>경남</option>
            <option>경북</option><option>전남</option>
            <option>전북</option><option>제주</option>
        </select></td></tr>
        <tr><td>관심분야</td></tr>
        <td>
        <input type="checkbox" name="interest"value="영화" id="movie">영화
        <input type="checkbox" name="interest" value="스포츠" id="sports">스포츠
        <input type="checkbox" name="interest"value="여행"  id="travel">여행
        <input type="checkbox" name="interest"value="연예"  id="enter">연예
        <input type="checkbox" name="interest"value="정치"  id="politics">정치
        <input type="checkbox" name="interest" value="경제" id="economy">경제
        </td></tr>
        <tr><td colspan="2">
        <input type="button"id="show"value="입력보기">&nbsp;
        <input type="button"id="reset" value="비우기">

    </td></tr>


 </table>

</body>
<script  src="https://code.jquery.com/jquery-3.5.0.js"></script>

<script language="javascript">
    //1).$(document).on('click',(제어할 객체의 id값?),function(){할일})//
    //2).on('click') == .onclick 특정한 객체의 클릭이벤트를 접근하는 방법 //
    $(document)
    .on('click','#reset',function(){
     //할일 적어주면 됨//
     //reset 이라고 하는버튼의 아이디 값이있는데 그것이 value 가 비우기와 같다면//
     //.val() == >객체의 값을 가져오는 역할을 한다 //
     //.val() == > prameter 안에매개 변수가 있으면 setter 역할을 하고 변수가 없으면 getter 역할을 한다//
     //1) rest이라는 버튼은 비우기 역할을 하는데 공백 처럼 보이게 만들어주면되므로 
     //각각의객체에 setter를 "" (공백)으로 하면 비어있는 것 처럼 보이게 만들수있다.//
     //ex) a.val("") == > a라고 하는 필드에는 공백인것 처럼 보인다 //
     //2)제이쿼리에서 객체에 접근(선택)할때는 $ 로 시작하고 접근하려는 객체를(예를들어 객체아이디등을)적어주고 
     //3).val()같은 객체 값을 가져온다던지 하는 그러한 객체를 접근하는 함수등을 이용해서 객체를 접근한다 //


     if($('#reset').val() =="비우기"){
         //1)이름이라고 하는 객체의 값을 빈것처럼 보이게 하려고 한다//
         //2)이름이라고 하는 객체의 아이디 값을 적어주고 그다음에 .val()이용하여서 객체의 값을 공백처럼 보이게 한다//
        // 이름이라고 하는 필드를 공백처럼 보이게 했다//
         $("#txtname").val("");
         //생년월일 이라고 하는 객체의 필드를 공백처럼 보이게 했다 //
         $("#txtbirth").val("");
         //라디오 버튼이라는 객체에 접근하는 방법 //
         //라디오 버튼의 property 를 false 라 하게되면 ==>체크가 안된상태가된다//
         //라디오 버튼의 property 를 true 라 하게되면 ==> 체크가 된상태가 되버린다//
         //중요한것은 radio 의 name 부분은 동일해야하고 value 값은 달라야한다//
         $("input:radio[name='gender']:radio[value='여자']").prop("checked",false);
         $("input:radio[name='gender']:radio[value='남자']").prop("checked",false);
         //사용자 아이디를 지워보자//
         //사용자 아이디라는 객체 에 .val("")해서 setter 역할을 해주면 된다 //
         $("#userid").val("");
         //사용자의 비밀번호 필드를 지워보자//
         //사용자 비밀번호 아이디 객체를 접근해서 setter 역할을 해주면된다//
         $("#passcode1").val("");
         //사용자 비밀번호확인 필드를 지워보자//
         //위 와같은 방법으로 접근해주면된다//
         //텍스트 필드의 객체들은 .val()을 이용하면된다.//
         $("#passcode2").val("");
         //셀렉트박스(콤보박스)초기화 해주기 //
         //셀렉트 박스도 마찬가지로 처음부분에는 셀렉트박스의 객체에 접근하기위한 id를 입력하고 //
         //그다음이 조금다른데  .find 라는것을 이용한다 //
         //이런식으로 작성하게되면 처음 선택되었던 값으로 돌아가게된다//
         $('#selArea').find('option:first').attr('selected', 'selected');//셀렉트박스 초기화//
         //체크박스 초기화(선택 해제방법)//
         //체크박스 에있는 객체들 의 아이디 값을 입력함으로써 객체에 접근한다//
         //.prop이라하는 속성 을 통해서 checked를 쓰고 false 라고 쓰게되면 거짓값이므로 체크가 해제된다.//
         //라디오 나 체크박스등 체크 = true 언체크는 = false//
         $("#movie").prop("checked", false); 
         $("#sports").prop("checked", false); 
         $("#travel").prop("checked", false); 
         $("#enter").prop("checked", false); 
         $("#politics").prop("checked", false); 
         $("#economy").prop("checked", false); 
        
     }


    });
    //$(document) ==> dom 객체에 접근하는 제이쿼리식 방식 
    //onclick 이라는 이벤트를 실행할거다 그런데 그 이벤트를 실행할 대상(객체)가 
    //#show 라는 값을 가진 객체이고 그객체가 할일을 함수를 선언함으로써 그 함수안에  그객체를 접근하고 할일을//
    //적어줄것이다 라는 예고//
    $(document)
    .on('click',"#show",function(){
        if($("#show").val()=="입력보기");
        //#show라고 하는 값을 가진 객체의 역할 ==> 보여주는 역할 이므로 여기 메소드안에는 보여주는 역할//
        //을 하는 내용을 적어주면 된다//
        //중요한 사실은 .val() 이라는 함수는 객체의 값을 가져와주는 역할도 하고 객체의 값을 설정해주는 역할//
        //도 하기때문에 //
        //내가 만약에 객체의 값을 가져올때는 매개변수가 없어야하고 객체의 값을 설정할때는 매개변수가
        //반드시 있어야한다//
        //참고로 이 메소드 안에서는 객체의 값을 반환하는 역할을 하는 메소드이므로 
        //.val() 이라는 함수를 사용할때 반드시 매개변수가 없는 .val()함수를 써야한다//
        //1.실명이라는 필드를 가진 객체를 접근하고 그 객체의 값을 반환하도록 하는방법//
      
        str1 = $("#txtname").val();
        //2.생년월일이라는 필드를 가진 객체를 접근하고 그 객체의 값을 반환하도록 하는방법//
        str2 = $("#txtbirth").val();
        //3.성별이라는(라디오박스)필드를 가진 객체를 접근하고 그객체의 값을 반환하도록 한다//
        //아래 코드는 선택된 라디오 값을 가져오는 코드이다(체크된 라디오 값을 반환해주는방법//
        str3= $(":input:radio[name=gender]:checked").val();
        4//사용자 아이디라는(텍스트)필드를 가진 객체를 접근하고 그객체의 값을 반환하도록 한다//
        str4=$("#userid").val();
        5//비밀번호라는 (텍스트)필드를 가진 객체를 접근하고 그객체의 값을 반환하도록 한다//
        str5=$("#passcode1").val();
        6//비밀번호 확인이라는(텍스트)필드를 가진 객체를 접근하고 그객체의 값을 반환하도록 한다//
        str6=$("#passcode2").val();
        7//거주지역이라는 (셀렉트박스)필드를 가진 객체를 접근하고 그객체의 값을 반환하도록 한다//
        str7=$('#selArea').val();
        8//관심분야라는 (체크박스) 필드를 가진 객체를 접근하고 그객체의 값을 반환하도록 한다//
        //참고로 체크된 객체를 접근하고 체크된객체의 값을 반환하는 방법이다//
        //.each()함수를 썻다//
        //$('input[type="checkbox"]:checked')==> 체크박스라고 하는 객체를 접근하는것이고 그리고 
        //그 체크박스는 체크된 체크박스의 객체를 접근하는 방식이다//
        //this.==> 객체 자신을 가리키는 것이다 //
        var str8 ="";
        $('input[type="checkbox"]:checked').each(function (index) {
            if (index != 0) {
        str8 += ', ';
        }
        str8 += $(this).val();
       });
        
        alert(str1+("\n")+str2+("\n")+str3+("\n")+str4+("\n")+str5+("\n")+str6+("\n")+str7+("\n")+str8);


    });


</script>