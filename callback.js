// function h(x,fn){
//     console.log(x*x)
//     fn()
// }
// h(10,function(){
//     console.log("done with callback")
// })
console.log("start")
setTimeout(function f(){
    console.log("time out")// execute after 5 sec
},5000)
for(let i=0;i<10000;i++){console.log("gayu")}
console.log("its me")