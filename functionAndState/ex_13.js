function validatePassword(password) {
    const isValidLength = (str) => str.length >= 6 && str.length <= 10;
    const isAlphanumeric = (str) => /^[a-zA-Z0-9]+$/.test(str);
    const hasAtLeastTwoDigits = (str) => (str.match(/\d/g) || []).length >= 2;

    let isValid = true;

    if (!isValidLength(password)) {
        console.log("Password must be between 6 and 10 characters");
        isValid = false;
    }

    if (!isAlphanumeric(password)) {
        console.log("Password must consist only of letters and digits");
        isValid = false;
    }

    if (!hasAtLeastTwoDigits(password)) {
        console.log("Password must have at least 2 digits");
        isValid = false;
    }

    if (isValid) {
        console.log("Password is valid");
    }
}
