function count_word(text, word) {
    let count = 0;
    const words = text.split(/\s+/);
    for (let i = 0; i < words.length; i++) {
        if (words[i] === word) {
            count++;
        }
    }
    return count;
}
