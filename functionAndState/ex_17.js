function factorialDivision(num1, num2) {
    function calculateFactorial(n) {
        let factorial = 1;
        for (let i = 2; i <= n; i++) {
            factorial *= i;
        }
        return factorial;
    }

    let fact1 = calculateFactorial(num1);
    let fact2 = calculateFactorial(num2);

    let result = fact1 / fact2;

    console.log(result.toFixed(2));
}
