// function sqr(c){//parameter
//     console.log(c*c);
// }
// //sqr(5);//arguments
// function greet(){
//     console.log("im greet")
// }
// greet()
//-------------fun with single and multiple parametr---------//
//function aadd(x=10,y)//cause error--always assign left to right

// function aadd(x,y=10)// no error

// {
//     return x+y;
// }
// console.log(aadd(1));
///------------------array as parameter----------------//
// let a=[4,5]

// function add([a,b])// arr firsst two ele
// {
// return a+b;
// }
// console.log(add(a))
//--------------------unlimited argu------------------//
// function sum1(){
//     let sum=0;
//     for(var i=0;i<arguments.length;i++){
//         sum+=arguments[i];}
//         return sum;
    
// }
// let r=sum1(4,2,5,1)
// console.log(r)
//-----------------arrow function(fat arrow function)----------//
// let x = 5;
// const sqr = (x) => x * x;
// console.log(sqr(x));

// const sum=(x,y)=>{
//     console.log(`Adding ${x} and ${y}`);
//     return x+y;
// }
// let ans=sum(5,5)
// console.log(ans)

//----------------anon function--------------//
// let x=function(){
//     console.log("hi im anon function")
// }
// x();
// //-----------immediately invoke function----------//
// (function exe(){
//     console.log("hi")
// })();
//---------------expression function-----------//
// when we assign ur function to a varibal
