function rotate_array(numbers,rotations){
    for (let i = 0; i < rotations; i++) {
        let first_element = numbers.shift();
        numbers.push(first_element);
    }
    console.log(numbers.join(" "));
}
