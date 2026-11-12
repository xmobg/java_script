function piccolo(input) {
    let parking = new Set();

    for (let line of input) {
        let [direction, car] = line.split(', ');
        if (direction === 'IN') {
            parking.add(car);
        } else {
            parking.delete(car);
        }
    }

    if (parking.size === 0) {
        console.log('Parking Lot is Empty');
    } else {
        [...parking].sort().forEach(car => console.log(car));
    }
}
