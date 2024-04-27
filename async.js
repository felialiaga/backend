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



async function asyncContext() {
    console.log('Iniciamdo mi operacion');

    try {
        const a = await divide(4,0);
        console.log(a);
    }catch(error) {
        console.log(error);
    }

    console.log('Operacion terminada');
}

asyncContext();