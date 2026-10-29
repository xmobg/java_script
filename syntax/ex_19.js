function fruit(fruit, weight, price) {
    let kilograms = weight / 1000;
    let money = kilograms * price;

    console.log(`I need $${money.toFixed(2)} to buy ${kilograms.toFixed(2)} kilograms ${fruit}.`);
}
