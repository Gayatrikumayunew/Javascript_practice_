// let age=12;
// if(age>12){
//     console.log("your age is more than 12")
// }
// else{
//     console.log("your age is less than 12")
// }
 // %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%5printing table of 6 %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%//
 let num=6;
 let i=1;
 while(i<11){
    let result = num * i;
    console.log(`${num} * ${i} = ${result}`);
  
    i++;
 }
//--------------------- Write a JavaScript expression to calculate the area of a rectangle with given length and width.
let len=12;
let wid=24;
res=len*wid;
console.log(res)
//-------------------Explain the difference between the == and === operators in JavaScript.
// == it checks the value are matching or not
//=== it also checks its data type 
let value1=5;
let value2="5";
console.log(value1==value2)//true
console.log(value1===value2)//false
//-----------------What is the result of "5" + 3 in JavaScript, and why?
//console.log(typeof("5"+3));
console.log("5"+3)// when you use + operator in js it treate it as string 
console.log(Number("5") + 3);// you have to type caste it into number

// ----------------------------------Write a JavaScript expression that checks if a number is even.

let entered_num=12;
if(entered_num%2==0){
    console.log("yes number is even")
}
else{
    console.log("number is not even")
}

//--------------------------------Write a for loop that prints all even numbers from 1 to 20.
for(let j=1;j<21;j++){
    if(j%2==0){
        console.log(j)
    }
}
//-------------------------------Write a while loop that counts down from 10 to 1 and prints the numbers.
let num1=10;
while(num1 >=1){
    console.log(num1);
    num1--;
}
//----------------------Write a JavaScript expression using the ternary operator to find the maximum of three numbers.
let first = 5;
let second = 11;
let third = 6;

let max = (first > second) ? (first > third ? first : third) : (second > third ? second : third);


console.log("The maximum of the three numbers is: " + max);

