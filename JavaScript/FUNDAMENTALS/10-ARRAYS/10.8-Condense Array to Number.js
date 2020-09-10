function condenseArrToNum(arr) {

    while (arr.length > 1) {
        let condense = [];
        for (let i = 0; i < arr.length - 1; i++) {
            condense[i] = Number(arr[i]) + Number(arr[i + 1]);
        }
        arr = condense;

    }
    console.log(arr[0]);


} condenseArrToNum([5, 0, 4, 1, 2]);