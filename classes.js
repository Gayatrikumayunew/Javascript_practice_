class Product {
    // function-member function
    name;
    price;
    rating;

    constructor(n, p, r) {
        this.name = n;
        this.price = p;
        this.rating = r;
        // The constructor now returns {x: 0, y: 1}
        return { x: 0, y: 1 };// not return primitive also a obj return.
    }
    //constructor{
    //     console.log("hi")
    // }// only one constructor allowed
    

    display() {
        console.log("It's fun");
    }
}

const p = new Product();
console.log(p); // Outputs: { x: 0, y: 1 }
