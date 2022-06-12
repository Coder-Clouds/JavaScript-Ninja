// function add(a, b = 0, c){
//   // b = b || 0;
//   // if(b === undefined){
//   //   b = 0;
//   // }
//   return a + b + c;
// }

// var result = add(20, null, 20);
// console.log(result);


// function highest (...args){
//   return args.sort(function(a,b){ 
//     return b - a; 
//   }); 
// }

// // function makeArray(args){
// //   return Array.prototype.slice.call(args)
// // }

// var resultArr = highest(1, 1, 2, 3);



// function multiMax(multi, ...allButFirst){ 
//   // Make an array of all but the first argument 
//   // var allButFirst = ___; 
 
//   // Find the largest number in that array of arguments 
//   var largestAllButFirst = Math.max.apply( Math, allButFirst ); 
 
//   // Return the multiplied result 
//   return multi * largestAllButFirst; 
// } 

// assert(multiMax(3, 1, 2, 3) == 9, "3*3=9 (First arg, by largest.)");


// var arr1 = [1, 2, 3];
// var arr2 = [6,7,8];

// var combinedArr = [...arr1,4,5, ...arr2, 9,10];

// var obj1 = {a: 10, b: 20, c: 30};
// var obj2 = {x: 100, y: 200, z: 300};
// var combinedObj = {x: 300, ...obj1, c: 200, ...obj2};


function fn(a,b,c,d,e,f,g){
  console.log('a =>', a);
  console.log('b =>', b);
  console.log('c =>', c);
  console.log('d =>', d);
  console.log('e =>', e);
  console.log('f =>', f);
  console.log('g =>', g);
}
// var arr = [10, 20, 30, 40];
// var arr2 = [true, 'hello']
// fn(...arr, 'Taha', ...arr2);


var obj1 = {a: 10, b: 20, c: 30};
fn(...obj1);