// let variable
let a=15;
a=6;// you can change value of let declared variable
console.log(a)
//***********************************var*****************************************//

var g=12;
g=15;// you can also change value of var declared varible but there is a problem related to its scope so now its not good practice to use it.
console.log(g)
//***********************************const*****************************************//
const b=5;
//b=6;// you can not change value of const declared variable,it will create error
console.log(a)
// without value
let h;
console.log(h)// ny default it is undefined

//***************************some more practice************************ */

console.log("this is how to print in combination",5)
console.log(a && b)// both values are true so true
console.log(a && h)// value are false so undefined
const k="kiara";
console.log("ans is",k&&a)// output 6 it return lasted true value
console.log("ans is",a&&k)// output 6 it return lasted true value

let price=500;
let gst=400;
let final=price+gst;
console.log(final)