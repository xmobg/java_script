function makeADictionary(input) {
    let dictionary = {};

    for (let str of input) {
        let obj = JSON.parse(str);
        Object.assign(dictionary, obj);
    }

    Object.keys(dictionary)
        .sort((a, b) => a.localeCompare(b))
        .forEach(term => {
            console.log(`Term: ${term} => Definition: ${dictionary[term]}`);
        });
}
