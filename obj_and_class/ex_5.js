function phoneBook(array) {
    let phoneBook = {};
    for (let i = 0; i < array.length; i++) {
        let [name, number] = array[i].split(' ');
        phoneBook[name] = number;
    }
    for (let name in phoneBook) {
        console.log(`${name} -> ${phoneBook[name]}`);
    }
}
