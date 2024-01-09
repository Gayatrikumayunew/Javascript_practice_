function createpromise(){
    return new Promise(function exec(resolve,reject){
        setTimeout(function f(){
            console.log("its timer")
            reject("gayu")//resolve("")
        },3000)
    })
}
console.log("start"
)
let x=createpromise()
console.log("got  a new promise")
x.then(function f(){
    console.log("promise done")
})
.catch(function g(value){
    console.log("halt")
})
.finally(function r(){
    console.log("its finaaly")
})
//for(let i=0;i<1000000;i++){

//}