.on('blur','#txtname',function(){
    str=$(this).val();
    str=parseInt(str.substr(6,1));

    //if(str!='1' && str!='2' && str!='3' && str!='4'){
        if(str>4){

            alert("형식이 잘못되었다.");
        
    }
})