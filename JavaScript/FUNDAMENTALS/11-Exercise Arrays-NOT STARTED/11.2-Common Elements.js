function commonEl(arr1, arr2) {

    for (let i = 0; i < arr1.length; i++) {
        let common1 = arr1[i];

        for (let y = 0; y < arr2.length; y++) {
            let common2 = arr2[y];
            if (common1 === common2) {
                console.log(common1);
            }

        }


    }

} commonEl(
    ['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
    ['s', 'o', 'c', 'i', 'a', 'l']);