function solve() {
    const searchField = document.getElementById("searchField");
    const rows = document.querySelectorAll("tbody tr");
    const text = searchField.value;

    for (const row of rows) {
        row.classList.remove("select");

        const cells = row.querySelectorAll("td");
        for (const cell of cells) {
            if (cell.textContent.includes(text)) {
                row.classList.add("select");
                break;
            }
        }
    }

    searchField.value = "";
}