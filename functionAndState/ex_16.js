function loadingBar(number) {
    let percentsCount = number / 10;
    let dotsCount = 10 - percentsCount;

    let percents = '%'.repeat(percentsCount);
    let dots = '.'.repeat(dotsCount);

    if (number === 100) {
        console.log("100% Complete!");
        console.log(`[${percents}]`);
    } else {
        console.log(`${number}% [${percents}${dots}]`);
        console.log("Still loading...");
    }
}
