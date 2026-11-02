function censored_words(text, word) {
    const stars = "*".repeat(word.length);

    const censored = text.replaceAll(word, stars);

    console.log(censored);
}
