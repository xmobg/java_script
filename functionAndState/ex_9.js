function addAndSubtract(a, b, c) {
    function sum(a, b) {
        return a + b;
    }

    function subtract(sumResult, c) {
        return sumResult - c;
    }

    let result = sum(a, b);
    console.log(subtract(result, c));
}
