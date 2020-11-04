<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Page Title</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel='stylesheet' type='text/css' media='screen' href='main.css'>
    <script src='main.js'></script>
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
</html>

<script  src="https://code.jquery.com/jquery-3.5.0.js">
</script>


<script language="javascript">
    //제이쿼리에서는 $를 객체 접근하는 방법중 하나이다//
    //$(document)제이쿼리가 dom 에 접근하겠다는 의미이다//

   $(document).on('click','#reset',function(){
       if($("#rest").val()=="비우기"){
       //이 메소드의 역할은 비우기 라는 메소드 이다//
       //val() ==> 객체의 값을 반환하는 역할을합니다//
       //val()==> 객체의 값을 정해주는 역할을합니다//
       //val() 아무것도 없으면 값을반환해주고 val()parameter가 있으면 값을 정해주는 역할을합니다.//
       //val() 은 setter ,getter //
       //==>아이디 값이 txtname이라 하는 객체의 값을 ""로 정해주겠다//
       $("#txtname").val("");
       //생년월일이라고 하는 객체의 필드를 공백처럼 보이게 하고싶다//
       $("#txtbirth").val("");
       //라디오 버튼이라는 객체에 접근을하겠다//
       //라디오 버튼 객체에 접근하는 방법//
       //라디오 객체의 property 값 중 true 이면 라디오 버튼이 체크되어있는것이고
       //라디오 객체의 property 값 중 false 이면 라디오 버튼이 해제 되어있는것이다.
       $("input:radio[name='gender']:radio[value='여자']").prop("checked",false);
       $("input:radio[name='gender']:radio[value='남자']").prop("checked",false);
       //사용자 아이디를 지우겠다//
       //사용자 아이디 라는 객체를 접근하겠다//
       ("#userid").val("");
       //사용자 비밀번호라는 객체를 접근하겠다//
       ("#passcode1").val("");
       ("#passcode2").val("");
       //콤보박스 (select box)초기화 해주기//
       $('#selArea').find('option:first').attr('selected','selected');
       //체크박스 초기화해주기//
       //체크박스의 value 는 true일때 on 이고 false 일때 off//
       //체크박스를 초기화(off)해주는 상황이므로 prop은 false 이다.//
       $("#moive").prop("checked",false);
       $("#sports").prop("checked",false);
       $("#enter").prop("checked",false);
       $("#politics").prop("checked",false);
       $("#economy").prop("checked",false);
       $("#travel").prop("checked",false);
       }
   });

   //제이쿼리가 DOM에 접근을한다//
   //아이디값이 show 라는 버튼을 눌렀을때(.onclick ==>클릭이벤트)의 이벤트를 함수에 담아서 실행하겠다//
   //결론 == 함수에 이벤트를 담는다 == 함수에 그 객체를(아이디가 show라는 버튼을 눌렀을때),함수에서 어떤 동작을//
   // 코드로 적어놓는다//
   //일단 이 함수는 역할이 버튼을 눌렀을때 객체들의 값을 보여주는 역할을 하는 함수이므로//
   //val() 를 이용하여 Getter 역할을 해주면된다//

   $(document)
   .on('click','#show',function(){
       if($('#show').val()=='입력보기'){
           //실명이라는 객체를 접근하고 그객체의 값을 반환하도록함//
           str1=$("#txtname").val();
           //생년월일이라는 객체를 접근하고 그 객체의 값을 반환하도록 함//
           str2=$('txtbirth').val();
           //성별이라는(라디오박스)를 가진 객체를 접근하고 그객체의 값을 반환하도록함//
           //선택(체크)되어있는 라디오 (객체)를 가져오는 코드이다//
           str3=$(':input:radio[name=gender]:checked').val();
           //사용자 아이디라는(텍스트)필드를 가진 객체를 접근하고 그객체의 값을 반환하도록한다//
           str4=$("#userid").val();
           //비밀번호라는 객체를 접근하고 그객체의 값을 반환하도록 한다//
           str5=$("passcode1").val();
           str6=$("passcode2").val();
           //거주지역이라는 셀렉트박스를 가진 객체를 접근하고 그객체의 값을 반환하도록 한다//
           str7=$('#selArea').val();
           //관심분야라고 하는 체크박스 필드를 가진 객체를 접근하고 그객체의 값을 반환하도록한다//
           //이방법은 체크된 체크박스의 객체를 접근하고 체크된객체의 값을 반환하는 방법이다.//
           var str8 ="";
           $('input[type="checkbox"]:checked').each(function(index){
               if(index!=0){
                   str8 +=',';
               }
               str8 += $(this).val();

           });
           alert(str1+str2+str3+str4+str5+str6+str7+str8);










       }

   });
 
  
   



</script>
