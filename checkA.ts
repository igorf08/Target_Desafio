function checkA(phrase: string) {
    let aOcurrences = 0;

    for (let i = 0; i < phrase.length; i++) {

        const letter = phrase[i].replace(/[ÁÀÂÄáàâä]/g, 'a').toLowerCase();
        
        if (letter === 'a') {
            ++aOcurrences; 
        }
    }

    return `O número de vezes em que a letra "A" apareceu foi ${aOcurrences}.`;
}

console.log(checkA('Olá, meu querido amigo. Onde está seu arco?'));