class GetSet {
    constructor() {
        this._name;
        this._price;
        this._rating = 0; // Initialize _rating in the constructor
    }

    get rating() {
        return this._rating;
    }

    set rating(r) {
        if (r < 0) {
            console.log("Rating cannot be negative");
            return;
        }
        this._rating = r;
    }

    getRating() {
        console.log(this._rating);
    }
}

const p = new GetSet();
console.log(p);

p.rating = 10; // Use the setter method to set the rating
p.getRating(); // Use the getter method to get the rating
