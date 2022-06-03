
function error(msg){
  console.log('%cERROR', 'color: red;font-weight: bold;font-size: 12px', msg);
}


function assert(pass, msg){
  if(pass){
    console.log('%cPASS', 'color: #73c836;font-weight: bold;font-size: 12px', msg);
  } else{
    console.log('%cFAIL', 'color: red;font-weight: bold;font-size: 12px', msg);
  }
}