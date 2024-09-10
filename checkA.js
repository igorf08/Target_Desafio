function checkA(phrase) {
    var aOcurrences = 0;
    for (var i = 0; i < phrase.length; i++) {
        var letter = phrase[i].replace(/[ÁÀÂÄáàâä]/g, 'a').toLowerCase();
        if (letter === 'a') {
            ++aOcurrences;
        }
    }
    return "O n\u00FAmero de vezes em que a letra \"A\" apareceu foi ".concat(aOcurrences, ".");
}
console.log(checkA('Olá, meu querido amigo. Onde está seu arco?'));
