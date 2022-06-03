// assert(isNimble && canFly && isDeadly, 'works or not?');
// console.log(canFly) // undefined
// console.log(isDeadly) // no hoisting and throw error
// console.log(isNimble); // run perfectly

// var canFly = function(){ return true; }; 
// window.isDeadly = function(){ return true; }; 
// function isNimble(){ return true; } 


function stealthCheck(){ 
    assert( stealth(), "We'll never get below the return, but that's OK!" ); 
   
    return stealth(); 
   
    function stealth(){ return true; } 
  } 
   
  stealthCheck();