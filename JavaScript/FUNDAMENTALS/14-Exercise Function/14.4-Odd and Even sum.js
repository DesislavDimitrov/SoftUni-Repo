function sumElements(singleNum) {
    let evenSum = 0;
    let oddSum = 0;
    let array = [];

//    array.push(singleNum);
   array = singleNum.toString().split("")
   //console.log(array);
    //for()
    for (let i = 0; i < array.length; i ++) {
        if (Number(array[i]) % 2 === 0) {
            evenSum += Number(array[i]);
        }else {
            oddSum += Number(array[i]);
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
sumElements(1000435);