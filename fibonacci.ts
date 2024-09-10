function fibonacci(number: number) {
    let arrayFibonacci = [0, 1, 1];

    for(let i = arrayFibonacci.length; i < number; i++) {
        arrayFibonacci[i] = arrayFibonacci[i - 1] + arrayFibonacci[i - 2];
    }

    if (arrayFibonacci.includes(number)) {
        console.log(`O número ${number} faz parte da sequência fibonacci.`)
        return arrayFibonacci;
    } else {
        return arrayFibonacci;
    }
}

console.log(fibonacci(13));