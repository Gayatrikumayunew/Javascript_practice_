// program1-datatype in javascript 
/*
1.number
1.1 interger value like 4,5,8...
1.2 floating values like 4.5,5.5..
1.3 infinity: Number.POSITIVE_INFIFITY AND Number.NEGATIVE_INFINITY
1.4 Not a Number NaN

2.string = "hello its js"
3.Bigint= 1024n;
4.Boolean= true , false
5.Undefineed undefined
6.Null null
7.symbol :symbol('gayyu')
8.Object
8.1 Array [1,2,'gk']
8.2 Object: {name:"gayu",cource:"web"}


2. Array of 10 products 
["lipstick","heels","gown","books","laptop","idcard","makeupkit","pic","bag","pw"]

3.creating object
{1:"ram",2:"shyam",3:"gayu",4:"nand",5:"divya"}
*/

// program1 - 
// 1.string 
let var1 = "this is gayu";
console.log(typeof var1);

let var2 = 5;
console.log(typeof var2);

let var3 = 5.5;
console.log(typeof var3);

let var4 = Number.POSITIVE_INFINITY;
console.log(typeof var4);

let var5 = Number.NEGATIVE_INFINITY;
console.log(typeof var5);

let var6 = NaN;
console.log(typeof var6);

let var7 = 1024n;
console.log(typeof var7);

let var8 = true;
console.log(typeof var8);

let var9 = undefined;
console.log(typeof var9);

let var10 = null;
console.log(typeof var10);

let var11 = Symbol("hi");
console.log(typeof var11);

let var12 = [1, 5, "hi"];
console.log(typeof var12);

let var13 = { 1: "one", 2: "two" };
console.log(typeof var13);

// program2 valid and invalid variables 

let total_amount = 4000;
console.log(total_amount);

let $val = 45;
console.log($val);

// invalid variables 
/*let 5five=45;
console.log(5five); //SyntaxError: Invalid or unexpected token

let @hello="new year";//SyntaxError: Invalid or unexpected token
console.log(@hello);*/

// program3= table printing 

let a = 5;

console.log(`${a} * 1 = ${a * 1}`);
console.log(`${a} * 2 = ${a * 2}`);
console.log(`${a} * 3 = ${a * 3}`);
console.log(`${a} * 4 = ${a * 4}`);
console.log(`${a} * 5 = ${a * 5}`);
console.log(`${a} * 6 = ${a * 6}`);
console.log(`${a} * 7 = ${a * 7}`);
console.log(`${a} * 8 = ${a * 8}`);
console.log(`${a} * 9 = ${a * 9}`);
console.log(`${a} * 10 = ${a * 10}`);
console.log(a * 5);

// program 3 arithmatic operators 
let num1 = 10;
let num2 = 8;
//for addition
console.log("addition is", num1 + num2);
// for substravtion
console.log("substraction is ", num1 - num2);
//multiplication
console.log("multiplication", num1 * num2);
//division
console.log("division", num1 / num2);
console.log(2 ** 1024);
console.log("modulu", num1 % num2);
console.log("exponential", num1 ** num2);

// perimetr of rectangle
let lenght = 10;
let width = 20;
let peri = 2 * (lenght + width);
console.log(`the perimeter ${lenght} and ${width} of rectangle is ${peri}`);

// comparision operators
//1 == (euality operators)
let num01 = 12;
let num02 = 12;
console.log(num01 == num02);

num01 = 10;
num02 = 15;
console.log(num01 == num02);
//2not operator === also check the data type of values

num01 = 45;
num02 = 45;
console.log(num01 === num02);

num01 = 45;
num02 = "45";
console.log(num01 === num02);
// 3 operator != not equla operator,used to check are values are not equal

num01 = 15;
num02 = 46;
console.log(num01 != num02);

num01 = 15;
num02 = 15;
console.log(num01 != num02);

//4 operator !== used to check not equality with strictly not wqual

num01 = 15;
num02 = "15";
console.log(num01 != num02);

//5 operator >
num01 = 16;
num02 = "15";
console.log(num01 > num02);
console.log(num01 < num02);


console.log(num01 <= num02);
console.log(num01 >= num02);

//program on if else and if amd if else if

let trafiiclight = "red";
if (trafiiclight == "red") {
    console.log("signal is red you cant go");
}
else if (trafiiclight == "yellow") {
    console.log("be reaady to go");

}
else if (trafiiclight == "green") {
    console.log("now you can go")
}
else {
    console.log("invalid input");
}

// largest two number

let firstnum = 14;
let secondnum = 15;
if (firstnum > secondnum) {
    console.log(`first number is greater i.e ${firstnum}"`);
}
else {
    console.log(` second number is greator i.e ${secondnum}`);
}

// divisibility check program
let divnum = 9;
if (divnum % 5 == 0 && divnum % 3 == 0) {
    console.log("divisible by both 3 & 5 i.e FizzBizz")
}

else if (divnum % 3 == 0) {
    console.log("divisible by 3 i.e Fizz")
}
else if (divnum % 5 == 0) {
    console.log("divisible by 5 i.e Bizz")
}
else {
    console.log("invalid input")
}

//switch case

let day = "saturday";

switch (day) {
    case "monday":
        {
            console.log("5 days left for weekend");
            break;
        }

    case "tuesday":
        {
            console.log("4 days left for weekend");
            break;
        }
    case "wednesday":
        {
            console.log("3 days left for weekend");
            break;
        }
    case "thusday":
        {
            console.log("2 days left for weekend");
            break;
        }
    case "friday":
        {
            console.log("1 days left for weekend");
            break;
        }
    case "saturday":


    case "sunday":
        {
            console.log("0 days left for weekend")
            break;
        }
    default:
        console.log("invalid day");

}


//month by numbers
const month = 12;
switch (month) {
    case 1:
        {
            console.log("janvary");
            break;
        }
    case 2:
        {
            console.log("febrarury");
            break;
        }
    case 3:
        {
            console.log("march");
            break;
        }
    case 4:
        {
            console.log("april");
            break;
        }
    case 5:
        {
            console.log("may");
            break;
        }
    case 6:
        {
            console.log("june");
            break;
        }
    case 7:
        {
            console.log("july");
            break;
        }
    case 8:
        {
            console.log("august");
            break;
        }
    case 9:
        {
            console.log("september");
            break;
        }
    case 10:
        {
            console.log("octomber");
            break;
        }
    case 11:
        {
            console.log("november");
            break;
        }
    case 12:
        {
            console.log("december");
            break;
        }

}

// ternary condition
let numm=5;
numm==0 ? console.log("number is zero") : numm>1 ? console.log("grater than 1") : console.log("less than one");

// ternery condition
let num001=45;
let num002=45;
num001==num002? console.log("number are equals") : num001 > num002? console.log("grater first") : console.log("less than second");

// multiplication table 

let mulnum=4;
for(let i=1;i<=10;i++)
{
    console.log(`${mulnum}*${i}= ${mulnum * i}`);
}

// positive number

let numtopositive=155;
for(let j=0;j<= numtopositive;j++){
    if(j%2==0){
        console.log(j)
    }
    
}
