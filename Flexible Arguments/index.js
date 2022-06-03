// function fn(){
//   // console.log(arguments instanceof Array);
//   // arguments.push(10);
//   for(var i = 0; i < arguments.length; i++){
//     console.log(arguments[i]);
//   }
// }

// fn(1,2,3,12,321);

// function smallest(array){
//   return Math.min.apply(Math, array);
// }

// var small = smallest([2,4,7,1,4]);
// assert(small == 1, 'Locate the smallest value.')

// function highest (){
//   makeArray(arguments).sort(function(a,b){ 
//     return b - a; 
//   }); 
// }

// function makeArray(args){
//   // Hint: Arrays have .slice and .splice methods which return new arrays. 
//   //
// }

// highest(1, 1, 2, 3);

function multiMax(multi){ 
  // Make an array of all but the first argument 
  var allButFirst = ___; 
 
  // Find the largest number in that array of arguments 
  var largestAllButFirst = ___; 
 
  // Return the multiplied result 
  return multi * largestAllButFirst; 
} 

assert(multiMax(3, 1, 2, 3) == 9, "3*3=9 (First arg, by largest.)");