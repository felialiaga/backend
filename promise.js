const divide = (num, den) => {
    return new Promise((resolve, reject) => {
        if(typeof num !== 'number' || typeof den !== 'number') {
            reject('Both arguments should be NUMBERS');
        };
        if(den === 0) {
            reject('Cannot divide by zero');
        }
        resolve(num / den);
    });
};

divide(1,2)
    .then(result => {
        console.log(result);
        const resultado = result + 1;
        return resultado;
    })
    .then(secondResult => {
        console.log(secondResult);
        
    })
    .catch(error => {
        console.log(error);
        throw new Error('Ooops');
    });