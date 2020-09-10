function sumEven(arrey) {



    for (let i = 0; i < arrey.length; i++) {

        arrey[i] = Number(arrey[i]);
        let sumEvenNum = 0;

        for (let num of arrey) {

            if (num % 2 === 0) {
                sumEvenNum += num;
            }

        }
        console.log(sumEvenNum);
    }

}
sumEven(['1', '2', '3', '4', '5', '6']);