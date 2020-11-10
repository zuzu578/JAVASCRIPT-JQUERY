
    $(document)
    //입력한 값을 alert에 띄우고싶을때//
    .on('click','#btnAlert',function(){
        //이름 모바일 번호 주소를 나오게 하고싶다면//
        var str1 = $('#txtname').val();
        var str2 = $('#mobile').val();
        var str3 = $('#txtaddress').val();
        
        alert(str1+("\n")+str2+("\n")+str3);
        return false;

    })
    
    




.on('click','#btnAlert',function(){
        var answer = prompt("이름을 입력하세요.");
       $('#txtname').val(answer);
       answer = prompt("모바일 번호를 입력해주세요");
       $('#mobile').val(answer);
       answer = prompt("주소를 입력해주세요.");
       $('#txtaddress').val(answer);
       
           return false;
      
    })