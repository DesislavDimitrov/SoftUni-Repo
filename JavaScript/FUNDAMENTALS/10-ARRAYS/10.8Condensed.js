function sumAll(arr) {

    while (arr.length > 1) {
        let condense = [];
        for (let i = 0; i < arr.length - 1; i++) {
            condense[i] = Number(arr[i] + arr[i + 1])
            
        }
        arr = condense;
        
    }console.log(Number(arr));

    

}
sumAll([5, 0, 4, 1, 2]);