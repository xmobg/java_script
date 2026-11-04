function powerNumber(base, exponent) {
    if (exponent === 0) {
        return 1;
    } else if (exponent < 0) {
        return 1 / powerNumber(base, -exponent);
    } else {
        return base * powerNumber(base, exponent - 1);
    }
}
