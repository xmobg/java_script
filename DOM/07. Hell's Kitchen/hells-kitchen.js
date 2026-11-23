function solve() {
    const input = JSON.parse(document.querySelector("#inputs textarea").value);
    const restaurants = {};

    for (const line of input) {
        const [name, workersText] = line.split(" - ");
        if (!restaurants[name]) {
            restaurants[name] = [];
        }

        for (const worker of workersText.split(", ")) {
            const [workerName, salary] = worker.split(" ");
            restaurants[name].push({ name: workerName, salary: Number(salary) });
        }
    }

    let bestName = "";
    let bestAverage = -1;

    for (const name in restaurants) {
        const workers = restaurants[name];
        const total = workers.reduce((sum, w) => sum + w.salary, 0);
        const average = total / workers.length;

        if (average > bestAverage) {
            bestAverage = average;
            bestName = name;
        }
    }

    const bestWorkers = restaurants[bestName].sort((a, b) => b.salary - a.salary);
    const bestSalary = bestWorkers[0].salary;

    document.querySelector("#bestRestaurant p").textContent =
        `Name: ${bestName} Average Salary: ${bestAverage.toFixed(2)} Best Salary: ${bestSalary.toFixed(2)}`;

    document.querySelector("#workers p").textContent = bestWorkers
        .map(w => `Name: ${w.name} With Salary: ${w.salary}`)
        .join(" ");
}