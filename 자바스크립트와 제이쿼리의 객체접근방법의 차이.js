
//자바 스크립트에서 자바스크립트가 객체에 접근하는 방법이고//

var person = {
  age:30,
  name:'lee',
  interest:'lol',
  speaking:function(){
    alert("hi my name is"+this.name+"im"+this.age+"i like"+this.interest)
  }

};
person.speaking();

//제이쿼리에서 제이쿼리가 객체에 접근하는 방법은 이것이다//
$(document)
.on('click','#hello',function({
   if($('#hello').val()=='hello world'){
     $(#'world').val();
     $(#'hi').val();
     $(#'person').val();
     

   }
});