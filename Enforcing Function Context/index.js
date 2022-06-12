Function.prototype.bind = function (){
  var func = this; 
  var args1 = Array.prototype.slice.call(arguments);
  var context = args1.shift();
  return function(){
    var args2 = Array.prototype.slice.call(arguments);
    var argsArr = args1.concat(args2)
    return func.apply(context, argsArr);
  }
}


function fn(n, a){
  this.name = n;
  this.age = a;
  return this;
}
var obj = {};

// bind(obj, fn);


var fn2 = fn.bind(obj, 'Ninja');
// fn2(10);


