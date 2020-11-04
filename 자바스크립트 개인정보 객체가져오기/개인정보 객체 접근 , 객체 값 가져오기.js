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
    
        
    $(document)
   .on('click','#reset',function(){
       if($("#reset").val()=="비우기"){
            $('#passcode1').val('');
            $('#passcode2').val('');
            $('#userid').val('');
            $('#txtname').val('');
            $('#txtbirth').val('');
            $("#movie").prop("checked", false); 
            $("#sports").prop("checked", false); 
            $("#travel").prop("checked", false); 
            $("#enter").prop("checked", false); 
            $("#politics").prop("checked", false); 
            $("#economy").prop("checked", false); 
            $("input:checkbox[name='NAME']").attr("checked", false);
            $("input:radio[name='female']:radio[value='여자']").prop("checked",false);
            $("input:radio[name='male']:radio[value='남자']").prop("checked",false);
   }
})
.on('click','#show',function(){
    if($("#show").val()=="입력보기"){
        //필드(텍스트필드 값 가져오기)//
        str1= $('#userid').val();
        //필드(텍스트필드 값 가져오기)//
        str2= $('#passcode1').val();
        //필드(텍스트필드 값 가져오기)//
        str3= $('#passcode2').val();
        //필드(텍스트필드 값 가져오기)//
        str4= $('#txtname').val();
        //날짜 값 가져오기//
        str5= $('#txtbirth').val();
        //셀렉트 박스값 가져오기//
        str6=$("#selArea option:selected").text();
        // 선택된 Radio 버튼의 값(value) 가져오기 //
        str7= $(":input:radio[name=gender]:checked").val();
        //선택된 체크박스 의 값(value)가져오기//
        var str8 = '';
        $('input[type="checkbox"]:checked').each(function (index) {
            if (index != 0) {
        str8 += ', ';
        }
        str8 += $(this).val();
 });

