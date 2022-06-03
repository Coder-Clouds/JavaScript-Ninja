// var obj1 = {fn : function(){}};
// var obj2 = {fn : function(){}};

// console.log(obj1.fn == obj1.fn);

// function Ninja(){ 
//     this.name = "Taha"; 
//     this.swung = false;
  
//     // this.swingsword = function (){
//     //   this.swung =true;
//     // }
//   } 

//   var n1 =new Ninja();
//   var n2 =new Ninja();


//   Ninja.prototype.swingsword = function (){
//     this.swung =true;
//   }

//   console.log(n1.swingsword == n2.swingsword)

// function Person(){

// }
// Person.prototype.dance = function(){}; 


// function Ninja(){} 

// // Ninja.prototype = Person.prototype;
// // Ninja.prototype = {dance: Person.prototype.dance};

// Ninja.prototype = new Person();

// var ninja = new Ninja();


// console.log(ninja.dance)


function Person(){} 
Person.prototype.getName = function(){ 
  return this.name; 
}; 
 
// Implement a function that inherits from Person 
// and sets a name in the constructor 
 
var me = new Me(); 
assert( me.getName(), "A name was set." );