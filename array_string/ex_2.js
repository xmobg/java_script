function reverse_array(n,array) {
    let reversedArray = [];
    for (let i = n - 1; i >= 0; i--) {
        reversedArray.push(array[i]);
    }
    return console.log(reversedArray.join(" "));
}
