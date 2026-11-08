function palindromeInteger(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        let numStr = numbers[i].toString();
        let reversedStr = numStr.split('').reverse().join('');

        if (numStr === reversedStr) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
}
