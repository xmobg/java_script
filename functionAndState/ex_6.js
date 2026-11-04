function calculateNumbers(a,b,c) {
    let negativeNumberCount = 0;
    if (a < 0) {
        negativeNumberCount++;
    }
    if (b < 0) {
        negativeNumberCount++;
    }
    if (c < 0) {
        negativeNumberCount++;
    }
    if (negativeNumberCount % 2    === 0) {
        console.log("Positive");
    } else {
        console.log("Negative");
    }
}    
