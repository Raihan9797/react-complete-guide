class Human {
    constructor() {
        this.gender = "Male";
    }

    printGender() {
        console.log(this.gender);
    }
}

class Person extends Human {
    // properties
    constructor() {
        super();
        this.name = "Max";
        // can change it here!
        this.gender = "Female";
    }

    // methods
    printMyName() {
        console.log(this.name);
    }

    sayHi () {
        console.log(this.name + " says Hi!");
    }
}

class Human2 {
    gender = "Male";

    printGender = () => {
        console.log(this.gender);
    }
}

class Person2 extends Human2 {
    name = "Max2";

    sayHi = () => {
        console.log(this.name + " says Hi!");
    }

    printMyName = () => {
        console.log(this.name);
    }
}


// instantiate a class
const max1 = new Person();
max1.sayHi();
max1.printMyName();
max1.printGender();

const max2 = new Person2();
max2.sayHi();
max2.printMyName();
max2.printGender();