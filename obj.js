// let ob={id:1,name:"hero",salary:10000}
// console.log(ob)
// //---------------------new keyword
// let emp=new Object();
// console.log(emp)
// emp.id=5;
// emp.name="ja"
// console.log(emp)
// //-----------------throw function
// function empp(id,n,s){
//     this.id=id;
//     this.name=n;
//     this.salary=s;
// }
// const e=new empp(103,"hello",45000)
// console.log(e)
// //---------------to access key

// console.log(emp.id)
// console.log(emp['name'])
// emp.salary=37000;
// console.log(emp)

// //-------------delete
// delete emp.id;
// console.log(emp)
/////////////////////obj------------methods---------------//
let emp={
    id:101,
    name:"gayu",
    age:21

};
let a=Object.keys(emp)
console.log(a)
let b=Object.values(emp)
console.log(b)
console.log(Object.entries(emp))

// to stop update or also can not add new functionality
//Object.freeze(emp)
emp.id=45;
console.log(emp) 
// only update not adding
Object.seal(emp)
emp.id=45;
emp.id2=455;

console.log(emp) 
//----------------to copy obj to new---------------//
let o=Object.assign({},emp)
console.log(o)
o.address="random"
console.log(o)








