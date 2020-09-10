function maxNum(arr) {
    let isTopNum = true;
    let newArray = [];

    for (let i = 0; i < arr.length; i++) {
        for (let y = i + 1; y <= arr.length; y++) {

            if (arr[i] <= arr[y]) {
                isTopNum = false;
                break;
            }
        }

        if (isTopNum) {
            newArray.push(arr[i]);
        }
        isTopNum = true;
    }
    console.log(newArray.join(' '));

} maxNum([14, 24, 3, 19, 15, 17])