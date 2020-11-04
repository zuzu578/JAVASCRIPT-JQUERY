<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>jquery</title>
</head>
<body>
    <select id="selCountry">
     <option> korea</option>
     <option> singapore</option>
     <option> usa</option>
     <option> finland</option>
     <option> indonesia</option>
    </select><br>
    <input type="button" value="선택" id="btnGO">
    <input type="text" id="txtname1"><br>
    <input type="text" id="txtname2"><br>
    

   
</body>
<script  src ="https://code.jquery.com/jquery-3.5.0.js"></script>
<script language="javascript">
    $(document)
    //입력한 값을 alert에 띄우고싶을때//
    .on('click','#btnGO',function(){
    alert($('selCountry').val());
    var pstr=$('#selCountry').val();
    $('#selCountry').val("korea");  
          return false;
        //getter 는 파라미터가 없고 반환값이있다//
        //setter는 반환값은 없지만 매개변수(파라미터)가있다//


    //이름 모바일 번호 주소를 나오게 하고싶다면//
       // var str1 = $('#txtname').val();
        //var str2 = $('#mobile').val();
        //var str3 = $('#txtaddress').val();
        //alert(str1+("\n")+str2+("\n")+str3);
    //textname1의 값이 txtname2로이동//
    //txtname1이 공란이되게//
    //setter//
    //예시//
    /*
    $('#txtname2').val($('#txtname1')).val());
    $('#txtname1').val('');
    return false;


    */
    
 
    //getter//
   // $('#txtname2').val(str1);
    //setter 이용해서 공란//
   //str1= $('#txtname1').val('');
    //return false;

    })
    
</script>
</html>