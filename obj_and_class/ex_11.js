function town(input) {
    for (let i = 0; i < input.length; i++) {
        let townName = input[i].split(' | ')[0];
        let latitude = Number(input[i].split(' | ')[1]).toFixed(2);
        let longitude = Number(input[i].split(' | ')[2]).toFixed(2);
           let city = {
        town: townName,
        latitude: latitude,
        longitude: longitude

        };
        console.log(city)
    }
 
}
