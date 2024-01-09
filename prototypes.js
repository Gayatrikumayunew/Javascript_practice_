 let Hero=["thor","spiderman"]
 let dehero=["batman","flash","superman"]
 let heropower={
     thor: "hello",
     spiderman:"sling",

     getSpidermenPower : function(){
 console.log(`spider power is ${this.spiderman}`)
     }
 }
 Object.prototype.hitest=function(){
     console.log("hitest is present ina ll obj")
 }
 console.log(Hero.hitest())
//-----------------------------------------------------our proptotye------------------------//
Array.prototype.hitest1=function(){
    console.log("its me")
}
console.log(Hero.hitest1())



// inheritance


const user={
    name:"top name",
    email:"top@gmail.com"
}
const Teacher={
    makevid:true
}
const support={
    isava:false
}
const tasupport={
    makeassign:"js",
    //__proto__:support//property of support are inherited to tasupport
}
Object.setPrototypeOf(tasupport,support)//property of support are inherited to tasupport
console.log(tasupport.isava)
///-------------------------ignore space-------------------------///
String.prototype.truelength=function(){
    console.log(`true len is ${this.trim().length}`)
}
"hitest    ".truelength()
"gayatri    ".truelength()



