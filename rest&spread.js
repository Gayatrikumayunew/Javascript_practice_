console.log(Array.from('foo'))

function myarr(){
    let ar=Array.from(arguments)
    let finalarr=ar.map(e=>e)// any logic you want
    console.log(finalarr)


}
myarr(1,2,3)
myarr(4,5,6,7,8)//return array
//----------------------------rest operator------------------------//
function myarr1(...arg){
    let finalarr1=arg.map(e=>e)
    console.log(finalarr1)
}
myarr(9,8,7,5,6)

//-------------------------spread operator-----------------------//
const onearr=[1,2,3,4]
const twoarr=[5,6,7,8]
const threearr=[...onearr,...twoarr]
//onearr.concat(twoarr)
console.log(threearr)

/////////////////////////-----------------------------------------------

const names=["superman","flash"]// spread
const newnmaes=["batman",...names,"thoe"]
console.log(newnmaes)

const sitename="pwskills"// spread
console.log([...sitename])

function pwskills(...values){
    return values
}
console.log(pwskills("superman","flash"))//rest,we are passing values to convert into arr


