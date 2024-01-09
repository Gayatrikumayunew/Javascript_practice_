let arr=[2,5,6,1,3,4];
arr.forEach(function(ele,index,arr){
console.log(index,ele,arr)
})
arr.forEach((ele,index,arr)=>{
    console.log("arrow",index,ele,arr)
    })
    const h=["aaaple ","boy","cat"]
    h.forEach((el)=>{
        console.log(el.toUpperCase())
    })

    //---------------map---------------//
    arr.map(function(ele,index,arr){
        console.log("map",ele,index,arr)
    })

    h.map((ele)=>console.log(ele.toUpperCase()))

    ///////////////-------------------filter--------------------//////////////
    // console.log(h)
    const v=h.filter((ele)=>{
       return ele.endsWith('t')
    })
    console.log(v)
    //-------------------------to add all product price of e commercs site------------------//
    const cartbill=[20,30,40]
    const sumofall=cartbill.reduce((previousVAl,currentVal)=>previousVAl+currentVal,0)
    console.log(sumofall)

    //---------------------------gamescore-----------------------//
    const gamescore=[200,300,310,250,150,"hi"]
    //check all values are number
    const gamescorecheck=gamescore.every((val)=>
typeof val==='number'
    
    )
    console.log(gamescorecheck)

    //find all score above 200
    const abov200=gamescore.find((s)=>s >200)
    console.log(abov200)