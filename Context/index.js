// var katana = { 
//   isSharp: true, 
//   use: function(){ 
//     this.isSharp = false; // "When it's an object property, the value is set within the object."
//   } 
// }; 
// katana.use();
// console.log(katana.isSharp);


// function Katana(){
//   this.isSharp = true; // "A global object now exists with that name and value."
// }

// Katana();
// console.log(isSharp);

// var ninja = {}; //
// function fn(){
//   this.name = 'taha'
// }
// fn.call(ninja);

// assert(ninja.name == 'taha', "I'm Ninja Developer");


// function add(a, b){ 
//   return a + b; 
// } 

// var obj = {};
// add.call(obj, 1, 5);


// assert( add.call(obj, 1, 2) == 3, ".call() takes individual arguments" ); 
// assert( add.apply(obj, [1, 2]) == 3, ".apply() takes individual arguments" ); 


function loop(array, cb){ 
  for ( var i = 0; i < array.length; i++ ) { 
    // Implement me! 
    
  } 
} 
var arr = [0, 1, 2];
loop(arr, function(value){ 
  assert(this === arr, "The context should be the full array."); 
});