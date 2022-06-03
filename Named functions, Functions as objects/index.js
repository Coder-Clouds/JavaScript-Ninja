function yell(n){ 
  return n > 0 ? yell(n-1) + "a" : "hiy"; 
} 
console.log(yell(4));
assert( yell(4) == "hiyaaaa", "Calling the function by itself comes naturally." );
































// var ninja = { 
//   yell: function (n){ 
//     return n > 0 ? arguments.callee(n-1) + "a" : "hiy"; 
//   } 
// }; 
// assert( ninja.yell(4) == "hiyaaaa", "A single object isn't too bad, either." );


// var samurai = { yell: ninja.yell }; 
// ninja = null;


// assert( samurai.yell(4) == "hiyaaaa", "works with callee" );


// var obj = {}; 
// var fn = function(){}; 

// obj.prop = "some value"; 
// fn.prop = "some value";
// console.log(obj.prop)
// console.log(fn.prop)

// assert( obj.prop == fn.prop, "both have same value on prop" );




// function isPrime( num ) { 

//   //you can code here

//   var prime = num != 1; // Everything but 1 can be prime 
//   for ( var i = 2; i < num; i++ ) { 
//     if ( num % i == 0 ) { 
//       prime = false; 
//       break; 
//     } 
//   } 

//   //and you can code here

//   return prime; 
// } 
 
// assert( isPrime(5), "Make sure the function works, 5 is prime." ); 
// assert( isPrime.cache[5], "Is the answer cached?" );