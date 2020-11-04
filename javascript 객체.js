/*자바스크립트에 배열 이용 .//

var array = new Array();

for(i = 0 ; i<5 ; i++){
  document.write(array[i]=i);
}
*/
//push()함수//
/*var num = new Array('a','b','c');
num.push('d');
document.write(num);
*/
//pop()함수//
/*var num = new Array('a','b','c');
num.pop();
document.write(num);*/
//shift()함수//
/*var num = new Array('a','b','c');
num.shift();
document.write(num);
*/
//length()함수//
/*var num = new Array('a','b','c');
document.write(num.length);*/
//concat()함수//
/*var num1 = new Array('a','b','c');
var num2 = new Array('d','e','f');
num1 = num1.concat(num2);
document.write(num1);*/

/*var num1 = new Array('a','b','c');
num1= num1.join(1000);
document.write(num1);*/

//substr();//
/*var m = 'good Morning , hello';
document.write(m.substr(5,7));*/
/*var person = {
    name: {
    first:'BoB',
    second:'Smith',
    },
  age: 32,
  gender: 'male',
  interests:{
    game : 'league of legends',
    instrument:'guitar'
  },
  bio: function() {
    alert(this.name.first + ' ' + this.name.second + ' is ' + this.age + ' years old. He likes ' + this.interests.game + ' and ' + this.interests.instrument + '.');
  },
  greeting: function() {
    alert('Hi! I\'m ' + this.name.second + '.');
  },
};

person.bio();
person.greeting();*/

/*var person1 = {
 name : 'chris',
 greeting : function(){
   alert("hello world"+"im"+this.name);
 },

}
person1.greeting()

var person2 = {
  name : 'Brian',
  greeting: function(){
    alert("hello world"+"im"+this.name);
  },
  
}
person2.greeting()
*/

//person.farewell = function() { alert("Bye everybody!"); }

/*var person = {
  farewell : function(){
    alert("Bye everybody!");
  }
}
person.farewell();*/
/*var person = {}
person.farewell = function() { alert("Bye everybody!"); }
person.farewell();

var person = {
  farewell = function(){
    alert("Bye everybody");
  }
}
person.farewell();
*/
/*var person = {
  eyes : "blue-eyes",
  farewell : function(){
    alert('hi'+this.eyes)
  }
};

person['eyes'] = "yello-eyes";
person.farewell = function(){alert("hello"+this.eyes)};
person.farewell();
*/
 /*var person = {
 myDataName :"lee",
 myDataValue: "170cm",
 introduce : function(){
   alert("hi"+"im"+this.myDataName+"im"+this.myDataValue)
 }
 }

person['myDataName'] = 'zoo';
person['myDataValue']='174';
person.introduce();
*/
//객체 멤버 설정 //

var person = {
  age : 20,
  name:"lee",
    
  introduce:function(){
   alert("hello"+"my name is"+this.name+"im"+this.age)
 }

}
person.age=21;
person["name"]="hi";
person.introduce = function(){alert("hi"+this.age+this.name)}
person.introduce()

 