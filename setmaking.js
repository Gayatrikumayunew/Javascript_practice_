let empty=new Set()
console.log(empty.size)

let arr=[1,2,3,4,1,5]
let newset=new Set(arr)
console.log(newset)

let newset1=new Set([...arr])// spread
console.log(newset1)

newset.add(8)
console.log(newset)
newset.clear()
console.log(newset)
//-------------------------------------------------
// set difference---------------------------

function setdiff(setA,setB){
return new Set([...setA].filter(ele=> ! setB.has)(ele))// iterating and matching with setB
}
//------------------------------map--------------------keyvalue pair and also remember  old values

let map=new Map()
console.log(map.size)

let arr3=[
    [1,"pen"],
    [2,"eraser"],
    [3,"book"],
    [4,"copy"]

];
console.log(arr3.map((ele)=>map.set(ele[0],ele[1])))// array to map

