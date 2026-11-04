function orderCalculator(products, quantities) {
    let totalPrice = 0;
    if (products == "coffee"){
        totalPrice += quantities * 1.50;
    }else if (products == "water"){
        totalPrice += quantities * 1.00;
    }else if (products == "coke"){
        totalPrice += quantities * 1.40;
    }else if (products == "snacks"){
        totalPrice += quantities * 2.00;
    }
    console.log(totalPrice.toFixed(2));
}
