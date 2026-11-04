function sorting_numbers(arr) {
    let sorted = arr.sort((a, b) => a - b);

    let result = [];
    let left = 0;
    let right = sorted.length - 1;

    while (left <= right) {
        result.push(sorted[left]);
        if (left !== right) {
        result.push(sorted[right]);
    }

        left++;
        right--;
    }

    return result;
}
