const sum = (num1, num2) => {
    return new Promise((resolve,reject) => {
        if(num1 === 0 || num2 === 0) {
            reject('Suma Innecesaria')
        }
        const result = num1 + num2;
        if(result === 0) {
            reject('El cero es neutro y no sirve como resultado')
        }
        if (result < 0) {
            reject('El resultado no puede ser menor que cero');
        }
        resolve(result);
    })
}

const context = async() => {
    try {
        const result = await sum(1, 2);
        console.log(result);
    }catch(error) {
        console.log(error);
    }
}