function oddOccurrences(input) {
    let words = input.toLowerCase().split(' ');
    let counts = new Map();

    for (let word of words) {
        counts.set(word, (counts.get(word) || 0) + 1);
    }

    let result = [];
    for (let [word, count] of counts) {
        if (count % 2 !== 0) {
            result.push(word);
        }
    }

    console.log(result.join(' '));
}
