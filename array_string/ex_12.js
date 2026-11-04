function modernTimes(text) {
    let result = text.match(/#[a-zA-Z]+/g);
    for (let i = 0; i < result.length; i++) {
        console.log(result[i].slice(1));
    }
}
