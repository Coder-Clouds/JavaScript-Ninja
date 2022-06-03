
function error(msg){
  console.log('%cERROR', 'color: red;font-weight: bold;font-size: 12px', msg);
}

error("it's an error");

function assert(pass, msg){
  if(pass){
    console.log('%cPASS', 'color: #73c836;font-weight: bold;font-size: 12px', msg);
  } else{
    console.log('%cFAIL', 'color: red;font-weight: bold;font-size: 12px', msg);
  }
}
assert( true, "I'll pass." ); 
assert( "truey", "So will I." ); 
assert( false, "I'll fail." ); 
assert( null, "So will I." ); 
console.log( "Just a simple log", "of", "values.", true ); 
error( "I'm an error!" );