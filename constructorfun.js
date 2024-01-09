function pro(n,p,r){
    this.name=n;
    this.price=p;
    this.rating=r;


}
// const p=new pro("gayu",10,4)
// console.log(p)
// let x={
//     p:pro
// }
// x.p("hi",45,5);
// console.log(x)
///////////////////////////cant use arrow function also cant use this///////////////////////
// const prod= (n,p,r)=>{
// this.name=n;
// this.price=p;
// this.rating=r;
// }
// const p=new prod("hello",1245,5)
// console.log(p)
let obj={
    x:10,
    fun(){
        y={
            gun:()=>{
                console.log(this.x)// x is accessible by fun because obj.fun 
            }
        }
        y.gun();
    }
}
obj.fun();


