// for(var i = 0; i < 10; i++){
//     (function (a){
//         setTimeout(function(){
//             console.log(a);
//             console.log('-------');
//         }, 100);
//     })(i);
// }
// console.log(i);

// function Ninja(){ 
//     this.name = "Taha"; 
//     var swung = false;
  
//     this.swingsword = function (){
//       swung = true;
//     }
//     this.getSwung = function(){
//         return swung;
//     }
//   } 
//    var person = new Ninja();

//    console.log(person.name)
//    console.log(person.getSwung());




// // Function to increment counter
// function increment() {
//     let counter = 0;
//     counter += 1;
//     return counter;
//   }
  
//   // Call increment() 3 times
//   console.log(increment());
//   console.log(increment());
//   console.log(increment());
  
//   //The counter should now be 3. But it is 1.
debugger;
for(var i = 0; i < 5; i++){
    (function(a){
    console.log(i);
        setTimeout(function(){
            console.log(i);
            console.log('-------');
        }, 100);
    })(i);
}