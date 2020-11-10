   $(document)
   .on('click','#txtname',function(){
       //1번째방식//
    $('input:radio[id=female]').prop('checked',true);
    //2번째방식//
    $('#female').prop('checked',true);