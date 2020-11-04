
//전역변수//
//var intSet = null 을 선언해주는 이유가//
//정지버튼을 눌렀을때 초기화 해주려고 (중단)하려고//
var intSet = "stop";
//제이쿼리가 클릭이벤트를 핸들링해서 아이디값이 btnGo 라하는 객체를 //
//접근하고 그리고 그 객체에서 할일을 익명함수에 적는다//
$(document)
.on('click','#btnGo',function(){
  
  //setTimeout()
  //설정해준 시간 후에 함수가 호출됨// 
    setTimeout(function(){
      alert("이 앱이 좋으시면 좋아요를 눌러주세요^m^")
      },3000)
    //setInterval//
    //일정시간 간격으로 함수를 호출, 반복해주는 역할을 함//
      intSet=setInterval(function(){
         var divtag = $('#timer-items').children();
            $('#timer-items').text(new Date());
        },1000);
    
    return false;
 
})

// 사용법//
.on('click','#btnStop',function(){
  if(intSet!="stop") clearInterval(intSet);
  alert("정지합니다.");
});