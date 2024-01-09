let pattern='pw'
let reg=new RegExp(pattern)
let f='gi'//g-global,i-case insesitive
let reg1=new RegExp(pattern,f)
let reg2=/pw/gi
const str="Pw is best of all,Pw courses"
const res=reg2.test(str)
console.log(res)

const res1=str.match(reg2)
console.log(res1)

//replace--------------------------
const re=str.replace(reg2,'p-w')
console.log(re)

const url="http://pwskillls.com/hitesh%21choudhary"
//const ans=url.replace(/%\d0/,'-')//\d-number if %21 then 
const ans1=url.replace(/%\d\d/,'-')//\d-number

console.log(ans1)

