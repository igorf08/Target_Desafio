function fibonacci(number) {
    var arrayFibonacci = [0, 1, 1];
    for (var i = arrayFibonacci.length; i < number; i++) {
        arrayFibonacci[i] = arrayFibonacci[i - 1] + arrayFibonacci[i - 2];
    }
    if (arrayFibonacci.includes(number)) {
        console.log("O n\u00FAmero ".concat(number, " faz parte da sequ\u00EAncia fibonacci."));
        return arrayFibonacci;
    }
    else {
        return arrayFibonacci;
    }
}
console.log(fibonacci(13));
