// function Ninja(){ 
//   this.name = "Taha"; 
//   this.swung = false;

//   this.swingsword = function (){
//     this.swung =true;
//   }
// } 
// var person = new Ninja();
// person.swingsword();


// class Ninja {
//   name;
//   swung = false;
//   constructor(n) {
//     this.name = n;
//   }

//   swingsword(){
//     this.swung = true;
//   }
// }

// var person = new Ninja('inam');



// function Person(){

// }
// Person.prototype.dance = function(){}; 


// function Ninja(){} 


// Ninja.prototype = new Person();

// var ninja = new Ninja();


// console.log(ninja.dance)


class Person {
  dance() {
    console.log(this.name + ' is dancing')
  }
}

class Ninja extends Person {
  name;
  constructor(n) {
    super();
    this.name = n;
  }

}

var n1 = new Ninja('Taha');
var n2 = new Ninja('inam');

n1.dance()