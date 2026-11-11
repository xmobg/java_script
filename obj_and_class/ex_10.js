function employeeName(name){
    let employee = {}
    for (let i = 0; i < name.length; i++) {
        let currentName = name[i]
        employee[currentName] = currentName.length;
    }
    for (let key in employee) {
   console.log(`Name: ${key} -- Personal Number: ${employee[key]}`);
}
}
