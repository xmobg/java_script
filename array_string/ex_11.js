function reveal_words(words, text) {
    let wordsArray = words.split(', ');

    for (let word of wordsArray) {
        let stars = '*'.repeat(word.length);

        text = text.replace(stars, word);
    }

    return text;
}
