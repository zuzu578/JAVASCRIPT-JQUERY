 $(document)
   .on('click','#txtname',function(){
    //checkbox  is = :checked 사용 //prop은 checked//
     if($('#attend').is(':checked')==true){
         //prop=속성//
         $('#attend').prop('checked',false);
      }else{
         $('#attend').prop('checked',true);
      }
     
       return false;
    })