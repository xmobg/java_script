function solve(word, text) {
    let lowerWord = word.toLowerCase();
    let words = text.toLowerCase().split(' ');

    for (let current of words) {
        if (current === lowerWord) {
            console.log(word);
            return;
        }
    }

    console.log(`${word} not found!`);
}
