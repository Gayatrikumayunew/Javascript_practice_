//------------------------nested function--------------------------//
function outer(){
    let outval='I am at scope level 1'
    function inner(){
        let innval=4;
        return
        console.log(outval)
    }
    inner()// inner function can access value of outer but outer cant access inner value called lexical and accesssing call clouser
   // console.log(innval)
}
outer()
//-----------------------example-------------------------//
const error="file not found"
setTimeout(function callback(){
    console.log(error)
},1000)

//----------------------------example------------------------//
let pagec=0
const items=[2,4,5,7]
items.forEach(function iter(num){
    pagec++
    console.log(num)
})
console.log(pagec)
