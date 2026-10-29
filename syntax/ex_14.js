function sum_print(start,end){
    let sum = 0;
    numbers = "";
    for (let i = start; i <= end; i++){
        numbers += `${i} `;
        
        sum += i;
    }
    console.log(numbers)
    console.log(`Sum: ${sum}`)
}
