function Ninja(){ 
  if( !(this instanceof _____) ){
    return new _____();
  }
  this.name = "Taha"; 
  this.swung = false;

  this.swingsword = function (){
    this.swung =true;
  }
} 
var person = new Ninja();
person.swingsword();

assert(person.swung == true, 'The ninja has swung the sword.');

var personB = new Ninja();

assert( !personB.swung, "Make sure that the ninja has not swung his sword." );

var ninja = Ninja();

// ninja.swingsword();

console.log(ninja.name);
console.log(ninja.swung);
console.log(ninja.swingsword);

