function adressBook(input) {
    let adressBook = {};
    for (let line of input) {
        let [name, adress] = line.split(':');
        adressBook[name] = adress;
        
    }
    let names = Object.keys(adressBook).sort((a, b) => a.localeCompare(b));
    for (let name of names) {
        console.log(`${name} -> ${adressBook[name]}`);
    }
}
