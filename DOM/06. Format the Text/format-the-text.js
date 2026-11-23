function solve() {
    const text = document.getElementById("input").value;
    const output = document.getElementById("output");

    const sentences = text
        .split(".")
        .map(s => s.trim())
        .filter(s => s.length > 0);

    let html = "";
    for (let i = 0; i < sentences.length; i += 3) {
        const paragraph = sentences.slice(i, i + 3).join(".") + ".";
        html += `<p>${paragraph}</p>`;
    }

    output.innerHTML = html;
}