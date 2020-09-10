function palindrom(input) {
    let inversNum = [];

    for (let i = 0; i < input.length; i++) {
        let numberToString = input[i].toString().split('');
        let order = '';
        let newOrder = '';

        for (let i = numberToString.length - 1; i >= 0; i--) {
            order = numberToString[i];
            newOrder += order;
        }
        inversNum.push(Number(newOrder));

        if ( input[i] === inversNum[i]) {
            console.log('true');
        } else {
            console.log('false');
        }
    }
} palindrom([32,2,232,1010]);