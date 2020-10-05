//parent class
class Vehicle {
    //arguments
    constructor(make, model, year) {
        //creating local instances with this. keyword
        //new variables called the same as the arguments
        this.make = make;
        this.model = model;
        this.year = year;
    }

    //method
    Information() {
        //${} in js takes variable
        //output to console
        //needs to be slanted ` instead of '
        console.log(`Make: ${this.make}, Model: ${this.model} Year: ${this.year}`);
    }

}
//inherit  from vehicle class with the key word extends
//child class
class Cars extends Vehicle {
    //arguments
    constructor(make, model, year, doors) {
        //invoke constructor of parent class using key word super
        super(make, model, year);
        //creating local instances with this. keyword
        this.doors = doors;
    }
    //when child class is invoked it has all functionality of parent class but extends it to doors also
    Information() {
        super.Information();
        console.log(`Doors: ${this.doors}`);
    }

}
//creates the object myCar by and instance of cars
let myCar = new Cars('VW', 'Golf', 2011, 5)
myCar.Information();

/*
//invoking class using the let key word
//myVehicle = a new instance of Vehicle
//passing variables
let myVehicle = new Vehicle('VW', 'Golf', 2008);
//invoking information method
//takes the Information method
let info = myVehicle.Information();*/