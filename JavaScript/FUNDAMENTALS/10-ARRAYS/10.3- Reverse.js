function order(n, input) {
    let arr = [];

    for (let i = n - 1; i >= 0; i--) {
        let line = input[i];
        arr += line + " ";
        
    }
console.log(arr);
}
order(2, [66, 43, 75, 89, 47]);