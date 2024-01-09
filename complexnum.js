class complexnum{
    #real;
    #imaginary;
    constructor(r,i){
        this.#real=r;
        this.#imaginary=i;
    }
    display(){
        console.log(this.#real,"+ i",this.#imaginary)
    }
    get real(){
return this.#real;
    }
    get imaginary(){
        return this.#imaginary;
    }
    addcomplexnum(c){
this.#real+=c.real;//this.-> refer to calling context is obj and adding it to real of c2.real 
this.#imaginary+=c.imaginary;
    }
}
const obj=new complexnum(2,3);
obj.display();
const obj1=new complexnum(4,5);
obj.addcomplexnum(obj1);
obj.display()
