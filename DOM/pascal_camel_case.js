function solve() {
    const text = document.getElementById("text").value;
    const convention = document.getElementById("naming-convention").value;
    const resultElement = document.getElementById("result");

    const words = text.toLowerCase().split(' ');

    function capitalize(word) {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    if (convention === "Camel Case") {
        resultElement.textContent = words[0] + words.slice(1).map(capitalize).join('');
    } else if (convention === "Pascal Case") {
        resultElement.textContent = words.map(capitalize).join('');
    } else {
        resultElement.textContent = "Error!";
    }
}
