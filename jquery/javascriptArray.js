//Javascript//
//Javascript는 실행시에 타입이 결정된다//
//배열 생성 //
//var ar = new Array("a", "b", "c");
//배열 추가방법//
//ar[0] = "hello";
//ar[1] = "world";
//ar[2] = "^&^";
//배열 끝에 원하는 갑을 추가할때//
//ar.push(100);
//ar.push(1000);
//배열 마지막값을 제거할때 //
//ar.pop();
//배열의 길이를 반환할때//
//var example1 = new Array("new","Array","hello");
//document.write(example1.length);
//document.write(ar);
//배열 사용 //
/*var ar = [];
ar.push('alpha');
ar.push('beta');
ar.push('cello');
ar.push('december');
var a  =  ar.pop();
document.write(a+"<br>");
for(i = 0 ; i < ar.length; i++){
  document.write(ar[i]+'<br>');
}
//자바와 달리 자바스크립트는 타입이 없는 언어여서 배열에서도 문자와 숫자를 혼합해서 넣어도 된다 //
//객체 , 클래스도 넣을수있다 //
//join = 문자열 사이에 원하는 문자열등을 넣을수있음 //
var p = ar.join("/")
document.write(p);*/
//배열에 직접 값을 넣기 //

var arrNumber = new Array("alpha","beta","cello","december");

document.write(arrNumber+'<br>');
var ap  = "Good Morning , vietnam";
//문자열의 길이 //
for(i = 0 ; i < ap.length ; i++){
  document.write(ap[i]+"<br>");
}
//Morning만 출력하고싶을때//
//부분 문자열만 꺼내고 싶을때//
document.write(ap.substr(5,7));