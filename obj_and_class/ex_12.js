function storeProvision(currentStock, delivery) {
    let products = {};

    for (let i = 0; i < currentStock.length; i += 2) {
        let productName = currentStock[i];
        let quantity = Number(currentStock[i + 1]);
        products[productName] = quantity;
    }

    for (let i = 0; i < delivery.length; i += 2) {
        let productName = delivery[i];
        let quantity = Number(delivery[i + 1]);

        if (productName in products) {
            products[productName] += quantity;
        } else {
            products[productName] = quantity;
        }
    }

    for (let [name, qty] of Object.entries(products)) {
        console.log(`${name} -> ${qty}`);
    }
}
