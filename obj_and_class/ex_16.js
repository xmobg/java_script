function wordsTracker(input) {
    let searched = input.shift().split(' ');
    let counts = {};

    for (let word of searched) {
        counts[word] = 0;
    }

    for (let word of input) {
        if (word in counts) {
            counts[word]++;
        }
    }

    Object.entries(counts)
        .sort((a, b) => b[1] - a[1])
        .forEach(([word, count]) => console.log(`${word} - ${count}`));
}
