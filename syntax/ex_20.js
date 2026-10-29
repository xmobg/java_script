
function same_numbers(number) {
    let digits = String(number);
    let firstDigit = digits[0];
    let isSame = true;
    let sum = 0;

    for (let i = 0; i < digits.length; i++) {
        if (digits[i] !== firstDigit) {
            isSame = false;
        }

        sum += Number(digits[i]);
    }

    console.log(isSame);
    console.log(sum);
}
