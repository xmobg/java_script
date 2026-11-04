function formatGrade(grade) {
    let description = "";

    if (grade < 3) {
        description = "Fail";
        console.log(`${description} (${Math.floor(grade)})`);
    } else if (grade < 3.50) {
        description = "Poor";
        console.log(`${description} (${grade.toFixed(2)})`);
    } else if (grade < 4.50) {
        description = "Good";
        console.log(`${description} (${grade.toFixed(2)})`);
    } else if (grade < 5.50) {
        description = "Very good";
        console.log(`${description} (${grade.toFixed(2)})`);
    } else {
        description = "Excellent";
        console.log(`${description} (${grade.toFixed(2)})`);
    }
}
