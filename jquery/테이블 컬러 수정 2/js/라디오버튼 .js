   $(document)
   .on('click','#txtname',function(){
    //checkbox  is = :checked »ç¿ë //propÀº checked//
  var str=$('input:radio[name=gender]:checked').prop('id');
  $('#txtname').val(str);
    })
