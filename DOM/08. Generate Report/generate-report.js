function solve() {
    const checkboxes = Array.from(document.querySelectorAll("thead input[type='checkbox']"));
    const rows = Array.from(document.querySelectorAll("tbody tr"));
    const report = [];

    for (const row of rows) {
        const cells = Array.from(row.querySelectorAll("td"));
        const obj = {};

        for (let i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked) {
                obj[checkboxes[i].name] = cells[i].textContent;
            }
        }

        report.push(obj);
    }

    document.getElementById("output").value = JSON.stringify(report);
}