function ensureOptions() {
    const selectTo = document.getElementById("selectMenuTo");
    if (!selectTo) {
        return;
    }

    const existing = Array.from(selectTo.options).map(o => o.value);
    const wanted = [
        { text: "Binary", value: "binary" },
        { text: "Hexadecimal", value: "hexadecimal" }
    ];

    for (const item of wanted) {
        if (!existing.includes(item.value)) {
            const option = document.createElement("option");
            option.textContent = item.text;
            option.value = item.value;
            selectTo.appendChild(option);
        }
    }
}

function solve() {
    ensureOptions();

    const number = Number(document.getElementById("input").value);
    const to = document.getElementById("selectMenuTo").value;
    const result = document.getElementById("result");

    if (to === "binary") {
        result.value = number.toString(2);
    } else if (to === "hexadecimal") {
        result.value = number.toString(16).toUpperCase();
    }
}