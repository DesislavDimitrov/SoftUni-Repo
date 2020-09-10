function maxNum(input) {
    let isTop = true;
    let array = [];

    for (let i = 0; i < input.length; i++) {
        for (let y = i + 1; y < input.length; y++) {

            if (input[i] <= input[y]) {
                isTop = false;
                break;
            }
        }
        if(isTop){
            array.push(input[i]);
        }
        isTop = true;
    } 
    console.log(array.join(' '));
        
} maxNum([27, 19, 42, 2, 13, 45, 48])