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

.on('click','#btnSubmit',function(){

    str1= $('#txtname').val();
    str2= $("input:radio[name=gender]:checked").val();
    str3= $('#mobile').val();
    $('#txtname').val('');
    $('#mobile').val('');
    
    $("input:radio[name='gender']:radio[value='female']").prop("checked",false);
    $("input:radio[name='gender']:radio[value='male']").prop("checked",false);

    

  
    $('table:eq(0)').append('<tr><td>'+str1+'</td><td>'+str2+'</td><td>'+str3+'</td></tr>');
     
   
})

.on('click','#btnReset',function(){
        $('#txtname').val('');
        $('#mobile').val('');
        $("input:radio[name='gender']:radio[value='female']").prop("checked",false);
        $("input:radio[name='gender']:radio[value='male']").prop("checked",false);
})

$(document)

.on('click','table:eq(0) tr',function(){ 
     console.log('hh');
     name=$(this).find('td:eq(0)').text();

     //체크된 값을 (라디오버튼의값)을 테이블에서 가져올땐 text()를쓴다//
     checked1= $(this).find("td:eq(1)").text();
     console.log(checked1)
     gender=$('input:radio[name=gender]:input[value="'+checked1+'"]').prop("checked", true);

    //  /(":input:radio[name='gender']:checked")//
     //('td:eq(1)').prop('checked', true);
     mobile=$(this).find('td:eq(2)').text();
     $('#txtname').val(name);
     alert(gender);
     //$(":radio[name='gender']").prop('checked', true);
     $('#mobile').val(mobile);
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
      nClick=$(this).index();
      //누르면 노란색//
      $(this).css('background-color','yellow');
   
   
     
     	

})
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
    $(' table tr:eq(0) td:eq(0)').html(update1)
    $(' table tr:eq(0) td:eq(1)').html(update2)
    $(' table tr:eq(0) td:eq(2)').html(update3)
  

})



</script>