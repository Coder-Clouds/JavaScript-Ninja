// Function.prototype.bind = function (context, ...args1){
//   // var func = this; 
//   // var args1 = Array.prototype.slice.call(arguments);
//   // var context = args1.shift();
//   return (...args2) => 
//     // var args2 = Array.prototype.slice.call(arguments);
//     // var argsArr = args1.concat(args2)
//     // var argsArr = [...args1, ...args2]
//     this.apply(context, [...args1, ...args2]);
  
// }


Function.prototype.bind = function (context, ...args1){
  return (...args2) => 
    this.apply(context, [...args1, ...args2]);
}

function fn(n, a){
  this.name = n;
  this.age = a;
  return this;
}
var obj = {};

// bind(obj, fn);


// var fn2 = fn.bind(obj, 'Ninja');
// fn2(10);
