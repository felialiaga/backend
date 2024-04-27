// let firstName;
// firstName = 'Felipe';

// let age = 18;

// const movies = ['Ready player One','Duro de matar','Rey Leon'];
// movies.push('Londres bajo fuego');

// firstName = firstName.toUpperCase();


// // console.log(firstName);
// // console.log(age);
// // console.log(movies);


// //---------------------------------------------------------------------------


// const students = [
//     {
//         firstName: 'Lucas',
//         lastName: 'Silva'
//     },
//     {
//         firstName: 'Felipe',
//         lastName: 'Aliaga'
//     },
//     {
//         firstName: 'Juan',
//         lastName: 'Fernandez'
//     },
// ];

// Object.freeze(students);
// students.age = 18;



// function present() {
//     students.forEach(student => {
//         console.log('Hola, buenas tardes, soy ', student.firstName);
//     });
// };
// present();


// const presentWithSmile = () => {
//     students.forEach(student => {
//         console.log('Hola, buenas tardes, soy ', student.firstName, ' :)');
//     });
// }
// presentWithSmile();


//------------------------------------------------------------------------------------------------

// let happyVariable = 'Hola';
// showVariable();

// function showVariable() {
//     let happyVariable = 'Adios';
//     let sadVariable = ':(';
//     console.log(happyVariable);
// }


//------------------------------------------------------------------------------------------------


// const student = {
//     firstName: 'Felipe',
//     lastName: 'Aliaga'
// };

// console.log(`Hello, I am ${student.firstName} and my last name is ${student.lastName}

//     I want Messi to play forever
// `);



//------------------------------------------------------------------------------------------------
//--------------------------- EJERCICIO --------------------------------
//------------------------------------------------------------------------------------------------


// const showList = (elements) => {

//     if(elements.length === 0) return 'Empty list';

//     elements.forEach((element) => {
//         console.log(element);
//     })

//     return `La longitud de la lista es ${elements.length}`;

// };

// console.log(showList([]));


//------------------------------------------------------------------------------------------------
//--------------------------- EJERCICIO --------------------------------
//------------------------------------------------------------------------------------------------


class Counter {
    static globalCount = 0;
    constructor(owner) {
        this.owner = owner;
        this.count = 0;
    }

    addCount = () => {
        this.count++; 
        Counter.globalCount++;
    }

    showCount = () => {
        console.log(`El conteo de ${this.owner} es ${this.count}`);
        console.log(`Conteo global = ${Counter.globalCount}`);
    }

    showResponsable = () => {
        console.log(`El responsable es: ${this.owner}`);
    }
}



const counter1 = new Counter('Felipe Aliaga');
const counter2 = new Counter('Lucas');

counter1.showResponsable()
counter1.addCount()
counter1.addCount()
counter1.addCount()
counter1.addCount()
counter1.addCount()
counter1.addCount()
counter1.addCount()
counter1.addCount()
counter1.showCount()

counter2.showResponsable()
counter2.addCount()
counter2.showCount()