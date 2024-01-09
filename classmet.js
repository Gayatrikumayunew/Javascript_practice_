
class hi{
    #rate=5;
    constructor(n,p,r) {
        this.name=n;
        this.price=p;
        this.rate=r;
    }
    static custm(){
console.log("its static method")
console.log(this.r)
}
}
const h=new hi();
//h.custm();
hi.custm()
console.log(r)