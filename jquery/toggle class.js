$(document)
//eq는 인덱스임 
.on('click','div:eq(0)',function(){
    //str='<tr><td>AA</td><td>BB</td></tr>';
    //$('table').append(str);
    $('div:eq(0)').toggleClass('class0');
})
.on('click','div:eq(1)',function(){
    //str='<tr><td>AA</td><td>BB</td></tr>';
   // $('table').prepend(str);
   $('div:eq(1)').toggleClass('class1');
})
.on('click','div:eq(2)',function(){
 //str='<input type=checkbox>뒤에추가';
 //$('table').after(str);
 $('div:eq(2)').toggleClass('class2');
})