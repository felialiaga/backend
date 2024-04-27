
// const a = false ?? 2;

// console.log(a);


class Person {
    firstName;
    #bodyCount; // Numero de personas con las que te acostaste


    getBodyCount = () => {
        return this.#bodyCount;
    }
}

const person = new Person();

person.firstName  = 'Felipe';