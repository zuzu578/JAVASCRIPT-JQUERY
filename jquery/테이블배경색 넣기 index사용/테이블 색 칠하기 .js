    //<td>클릭시 바탕색이 블루 레드 그린이 나타나도록//
    //closest(),
$(document)
.on('click','table tr:eq(1) td:eq(0)',function(){
    
    $(this).toggleClass('class0');
})
.on('click','table tr:eq(1) td:eq(1)',function(){
   
   $(this).toggleClass('class1');
})
.on('click','table tr:eq(1) td:eq(2)',function(){
 
 $(this).toggleClass('class2');
})
 
 