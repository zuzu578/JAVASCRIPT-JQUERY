<script language="javascript">
//td안의 텍스트를 가져오는 방법// 
//태그를 선택할때는 #을 쓰지않는다//
var intset = null;
$(document)

.on('click','#btnGo',function(){
   //rnum=세로 cnum=가로//
   var rnum=0,cnum=0 , n=0;
  
   intset=setInterval(function(){ 
       $('table tr:eq('+rnum+')td:eq('+cnum+')').text(n++);
      cnum++;
      if(cnum>2){ 
      cnum=0;
      rnum++;
      if(rnum>2){
          cnum=0;
          rnum=0;
      }
      }
},300);
return false;
})

// 사용법//
.on('click','#btnStop',function(){
  if(intset!=null) clearInterval(intset);
})
