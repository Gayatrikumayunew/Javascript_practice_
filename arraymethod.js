// let arr=[4,5,6,4,8,6,2,1]
// arr.push(5);// to insert a element
// console.log(arr);
// arr.pop();// to remove  a element
// console.log(arr);
// let a=arr.shift();// to remove 0 index
// console.log(arr);
// console.log(a)
// arr.unshift();
// console.log(arr);
////////------------concating arrays-------------/////////////////////
let a1=[1,2,3];
let a2=[4,5,6];
let a3=a1.concat(a2);
console.log(a3)
/////////////////-------make array value as a stsring---------//////////
let a4=a1.join("+");
console.log(a4)
a1.reverse();
console.log(a1)
console.log(a1.indexOf(2))
let ar=[9,8,9,3,4,3,0,1,6,0];
console.log(ar.slice(2,5))
/////////splice/////////
let b=[1,2,2,3,4]
b.splice(2,2,11);
console.log(b)
/////////////////code with harry/////
//tostring//
let num=[4,5,68,78,12];
num.toString("k");
console.log(num)
console.log(typeof(num))