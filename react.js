const multiply = number => number * 2;

console.log(multiply(10));

class Human {
        gender = 'Male';
    
    printGender = () => {
        console.log(this.gender);
    }
}

class Person extends Human {
        name = 'Nathan';
    printMyName = () => {
        console.log(this.name);
    }
}

const person = new Person();
person.printMyName();
person.printGender();


const numbers = [1, 2, 3]
const newNumbers = [...numbers, 4, 5, 6, 7]

console.log(numbers)
console.log(newNumbers)
