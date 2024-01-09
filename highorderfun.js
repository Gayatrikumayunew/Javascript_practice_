const power2 = (n) => {
    return n ** 2;
}

function power3(power2, n) {
    return power2(n) * n

}
// console.log(power3(power2,3))

function sayhello() {
    return () => {
        console.log("hello histesh")
    }
}
// let g=sayhello();
// console.log(g)
// g()

const higerorder = n => {
    const onefun = m => {
        const twofun = p => {
            return m + n + p;
        }
        return twofun
    }
    return onefun
}
// console.log(higerorder(2)(3)(4))
//-----------------------set interval-----------------//
function hellome(){
    console.log("helllo this is higher order fun")

}
//setInterval(hellome,1000)
setTimeout(hellome,2000)

// const arr=[2,3,4,5]
// const sumarr=arr=>{


// let t=0;
// arr.forEach(function(Ele){
//     t=t+Ele;
// })
// return t;}
// console.log(sumarr(arr));

