function OddEvenSum(number) {
    let evenSum = 0;
    let oddSum = 0;
    let array = [];

    array = number.toString().split('');
  
    for (let i = 0; i < array.length; i++) {
        if (Number(array[i]) % 2 === 0) {
            evenSum += Number(array[i]);
        } else {
            oddSum += Number(array[i]);
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);

    //for(let i = 0; i < ){}

} OddEvenSum(3495892137259234);