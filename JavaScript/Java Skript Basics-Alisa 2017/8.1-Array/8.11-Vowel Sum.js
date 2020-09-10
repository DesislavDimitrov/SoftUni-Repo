function vowelSum(inputString) {

    let sumLetters = 0;

    for (let j = 0; j < inputString.length; j++) {

    
        switch (inputString[j]) {
            case 'a':
                sumLetters += 1;
                break;
            case 'e':
                sumLetters += 2;
                break;
            case 'i':
                sumLetters += 3;
                break;
            case 'o':
                sumLetters += 4;
                break;
            case 'u':
                sumLetters += 5;
                break;
            
        }
        
    }
    console.log(sumLetters);


}
vowelSum('beer');



