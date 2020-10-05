class BMI {
    //arguments
    constructor(height, weight) {
        //creating local instances with this. keyword
        //new variables called the same as the arguments
        this.height = height;
        this.weight = weight;

    }

    //method 
    calculateBMI() {
        //bmi formula
        let bmi = this.weight / (this.height ** 2);
        //returning output
        return bmi;

    }

}

//invoking class using the let key word
//MyBmi = a new instance of BMI
//passing variables
let MyBmi = new BMI(2, 90);
//new variable 
//takes the calculateBMI method
let calculatedBMi = MyBmi.calculateBMI();
//output to console
console.log(calculatedBMi);